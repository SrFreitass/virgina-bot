import { readdirSync } from 'node:fs';
import * as path from 'node:path';
import { Command } from '../types/ICommand';

const commands: Command[] = [];
const commandsPath = path.resolve(process.cwd() + `/${process?.env?.IS_DEV_ENV === "1" ? "src" : "dist" }/commands`);

const directories = readdirSync(commandsPath)

for(const dir of directories) {
    console.log(dir);

    if(dir.includes(`${process?.env?.IS_DEV_ENV === "1" ? "ts" : "js"}`)) continue;

    const commandsFiles = readdirSync(`${commandsPath}/${dir}`)

    for(const file of commandsFiles) {
        console.log(file, "teste")

        
        console.log(`${commandsPath}/${dir}/${file}`);
        
        import(`${commandsPath}/${dir}/${file}`).then((commandImport) => {
            const command = new commandImport[Object.keys(commandImport)[0]]();
            commands.push(command);
        });
    }
}

export { commands };
