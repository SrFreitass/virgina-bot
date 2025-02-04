import { CommandInteraction, SlashCommandBuilder, SlashCommandOptionsOnlyBuilder } from "discord.js";
import { Command } from "../../types/ICommand";

class DolarCommand implements Command {
    name: string;
    data: SlashCommandOptionsOnlyBuilder;

    constructor() {
        this.name = "dolar";
        this.data = new SlashCommandBuilder()
            .setName(this.name)
            .setDescription("Veja o preço do dolar com a Virginia Fonseca")
            .addNumberOption((option) => option.setName("quantidade").setDescription("Quantidade de dolar"));
    }

    async execute(interaction: CommandInteraction) {
        try {
            const res = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL");
            const json = await res.json();   
            
            const value = interaction.options.get("quantidade")?.value as number;

            if(value) {
                return await interaction.reply(`Seguimore do céu, $${value} dolar é R$${value * json?.USDBRL?.high}! Tudo culpa do Lula 13 PT ⭐, O AMOR VENCEU, #VOLTA BOLSONARO 💖`);
            }
            
            await interaction.reply(`Seguimore do céu, o dolar tá R$${json?.USDBRL?.high}! Tudo culpa do Lula 13 PT ⭐, O AMOR VENCEU, #VOLTA BOLSONARO 💖`)
        } catch (error) {
            await interaction.reply("Fui censurada seguimore, não querem divulgar o dolar")
        }
    }
}

export { DolarCommand };

