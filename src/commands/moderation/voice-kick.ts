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
            .addStringOption((option) => option.setName("motivo").setDescription("Motivo do kick"))
    }

    async execute(interaction: CommandInteraction) {
        const authorId = interaction.user.id;

        const userId = interaction.options.get("user")?.value as UserResolvable;
        const reason = interaction.options.get("motivo")?.value as string;

        const user = await interaction.guild?.members.fetch(userId);

        if(!user?.permissions.has("Administrator") || authorId !== "724278598747553863") 
            return interaction.reply("Você não tem permissão para kickar alguém")

        await user?.voice.disconnect();

        await interaction.reply(`❌ Usuário <@${userId}> foi kickado pelo motivo: ${reason || "Sem motivos"}`)
    }
}

export {
    VoiceKickCommand
};
