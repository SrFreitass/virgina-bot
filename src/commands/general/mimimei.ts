import { CommandInteraction, SlashCommandBuilder, SlashCommandOptionsOnlyBuilder } from "discord.js";
import { Command } from "../../types/ICommand";
import { request } from "../../utils/ai-request";
import { promptVirginia } from "../../utils/prompt";

class mimimeiCommand implements Command {
    name: string;
    data: SlashCommandOptionsOnlyBuilder;

    constructor() {
        this.name = "mimimei";
        this.data = new SlashCommandBuilder()
            .setName(this.name)
            .setDescription("Eu me mimo, eu mereço! Fale com a Virginia Fonseca")
            .addStringOption((option) => option.setName("pergunta").setDescription("Fale com a Virginia Fonseca").setRequired(true));
    }

    async execute(interaction: CommandInteraction) {
        const question = interaction.options.get("pergunta")?.value;

        const prompt = promptVirginia + question;

        const response = await request(prompt);

        await interaction.reply(response);
    }
}

export { mimimeiCommand };
