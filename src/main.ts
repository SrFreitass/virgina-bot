import { Events } from 'discord.js';
import 'dotenv/config';
import { client } from './client';
import './config/refresh-commands';
import { commands } from './utils/dynamic-import-commands';

const commandsMap = new Map();

commands.forEach(command => {
    commandsMap.set(command.name, command);
});

client.on(Events.ClientReady, () => {
    console.log("Virginia fonseca está online!")
});


client.on(Events.InteractionCreate, async (interaction) => {
    console.log(interaction)

    if(!interaction.isCommand()) return;

    await commandsMap.get(interaction.commandName)?.execute(interaction);
});

client.login(process?.env?.DISCORD_BOT_TOKEN);