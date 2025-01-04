import { CommandInteraction, SlashCommandBuilder, SlashCommandOptionsOnlyBuilder, UserResolvable } from "discord.js";
import { Command } from "../../types/ICommand";

class VoiceKickCommand implements Command {
    data: SlashCommandOptionsOnlyBuilder;
    name: string;

    constructor() {
        this.name = "voicekick";
        this.data = new SlashCommandBuilder()
            .setName(this.name)
            .setDescription("Kick alguem da call")
            .addUserOption((option) => option.setName("user").setDescription("Você irar kickar esse usuário da call que ele está").setRequired(true))
    }

    async execute(interaction: CommandInteraction) {
        const user = interaction.options.get("user")?.value as UserResolvable;
        await interaction.guild?.members.kick(user);
    }
}

export {
    VoiceKickCommand
};
