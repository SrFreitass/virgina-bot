import { CommandInteraction, SlashCommandBuilder, SlashCommandOptionsOnlyBuilder } from "discord.js";
import { Command } from "../../types/ICommand";

class CafeCommand implements Command {
    name: string;
    data: SlashCommandOptionsOnlyBuilder;

    constructor() {
        this.name = "cafe";
        this.data = new SlashCommandBuilder()
            .setName(this.name)
            .setDescription("Veja o preço do café com a Virginia Fonseca")
    }

    async execute(interaction: CommandInteraction) {
        try {
            const res = await fetch("https://www.cepea.esalq.usp.br/br/indicador/cafe.aspx");
        

            const html = await res.text();

            const td = html.split("<td>");

            const price = Number(td[2].replace("</td>", "").replace(",", ".").replace(".", ""));
            const price2 = Number(td[77].replace("</td>", "").replace(",", ".").replace(".", ""));

            const response = `O preço do ☕ CAFÉ ARÁBICA CEPEA/ESALQ ${(price/60).toFixed(2)}kg, ${price}/60kg, tá caro né? Só não comprar que o preço abaixa! 13 ⭐ \n O preço do ☕ CAFÉ ROBUSTA CEPEA/ESALQ ${(price2/60).toFixed(2)}kg, ${price2}/60kg, tá caro né? Só não comprar que o preço abaixa! 13 ⭐`;

            await interaction.reply(response);
            await interaction.followUp("O preço do café é atualizado diariamente, para mais informações acesse: https://www.cepea.esalq.usp.br/br/indicador/cafe.aspx \n https://tenor.com/view/elei%C3%A7%C3%B5es2022-debate-band-lula-deus-me-de-for%C3%A7as-meu-pai-amado-gif-26586715");
        } catch (error) {
            await interaction.reply("Fui censurada seguimore, não querem divulgar o preço do café")
        }
    }

}

export { CafeCommand };

