import { readdirSync } from 'node:fs';
import path from 'node:path';
import { Command } from '../types/ICommand';

const commands: Command[] = [];
const commandsPath = path.resolve(__dirname, "../commands");

const directories = readdirSync(commandsPath)

for(const dir of directories) {
    console.log(dir);

    if(dir.includes(".ts")) continue;

    const commandsFiles = readdirSync(`${commandsPath}/${dir}`)

    for(const file of commandsFiles) {
        console.log(file, "teste")

        
        console.log(`${commandsPath}/${dir}/${file}`);
        
        const commandImport = await import(`${commandsPath}/${dir}/${file}`);

        const command = new commandImport[Object.keys(commandImport)[0]]();

        commands.push(command);
    }
}

export { commands };
