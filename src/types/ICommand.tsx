import { CommandInteraction, SlashCommandOptionsOnlyBuilder } from "discord.js";

interface Command {
    name: string;
    data: SlashCommandOptionsOnlyBuilder;
    execute: (interaction: CommandInteraction) => void;
}

export type { Command };
