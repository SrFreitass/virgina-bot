import { REST, Routes } from "discord.js";
import { Command } from "../types/ICommand";


const refreshCommands = async (commands: Command[]) => {
    
    const rest = new REST({ version: '10' }).setToken(process?.env?.DISCORD_BOT_TOKEN || "");

    const commandsJSON = commands.map((command) => command.data.toJSON());
    
    rest.put(Routes.applicationGuildCommands(process?.env?.DISCORD_BOT_CLIENT_ID || "", process?.env?.DISCORD_DEV_GUILD_ID || ""), {
        body: commandsJSON
    });
    
}

export { refreshCommands };
