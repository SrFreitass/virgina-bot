import { Events } from "discord.js";
import "dotenv/config";
import { createServer } from "node:http";
import { client } from "./client";
import "./config/refresh-commands";
import { refreshCommands } from "./config/refresh-commands";
import { dynamicImportCommands } from "./utils/dynamic-import-commands";

const main = async () => {
  const commandsMap = new Map();
  const commands = await dynamicImportCommands();

  await refreshCommands(commands);

  commands.forEach((command) => {
    commandsMap.set(command.name, command);
  });

  client.on(Events.ClientReady, () => {
    console.log("Virginia fonseca está online!");
  });

  client.on(Events.InteractionCreate, async (interaction) => {
    console.log(interaction);

    if (!interaction.isCommand()) return;

    await commandsMap.get(interaction.commandName)?.execute(interaction);
  });

  client.login(process?.env?.DISCORD_BOT_TOKEN);
};

createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Server is running");
}).listen(process.env.PORT || 8080, () => {
  console.log("HTTP server is running on port 8080");
  main();
});
