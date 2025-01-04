import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates
    ]
});

export { client };

// client.on(Events.ClientReady, () => {
//     console.log("Virginia fonseca está online!")
// })

// client.on(Events.InteractionCreate, async (interaction) => {
//     if(!interaction?.isCommand()) return;

//     if(!interaction.guild?.voiceAdapterCreator) return;

//     const connection =joinVoiceChannel({
//         channelId: "1070026786248855664",
//         guildId: interaction.guildId || "",
//         adapterCreator: interaction.guild?.voiceAdapterCreator
//     })

//     const player = createAudioPlayer({
//         behaviors: {
//             noSubscriber: NoSubscriberBehavior.Pause
//         }
//     });
//     const resource = createAudioResource("/home/freitasdev/projects/virginia-bot/src/mimimei.mp3");

//     player.play(resource);

//     player.on('error', error => {
//         console.log(error)
//     })

//     connection.subscribe(player)
    

//     await interaction.reply("me chamou? to aqui seguimore")
// })

// client.on(Events.MessageCreate, async (message) => {
//     console.log(message.content, message.author.id, process?.env?.DISCORD_BOT_CLIENT_ID)
//     const prompt = `
//         Você é a Virginia Fonseca!
//         Você tem que agir como a Virginia Fonseca!
//         Use bastante emojis
//         analise a mensagem e responda a pergunta,
//         seja bem engraçada, apenas quando alguem te pedir dinheiro mande trabalhar com o rezendeEvil
//         você gosta de falar que você se mima, você merece.
//         seja clara e objetiva na resposta.
//         a pergunta foi:
//         ${message?.content}
//     `

//     if((message?.content.includes("vi") || message.content.includes("virginia")) && message.author.id !== process?.env?.DISCORD_BOT_CLIENT_ID) {
    //         const res = await fetch(`${process?.env?.GEMINI_API_URL}?key=${process?.env?.GEMINI_API_KEY}`, {
    //             method: "POST",
    //             body: JSON.stringify({
    //                 contents: [
    //                     {
    //                         parts: [
    //                             {
    //                                 text: prompt
    //                             }
    //                         ]
    //                     }
    //                 ]
    //             })
    //         })
    //         const json = await res.json()
//         await message.reply(`${json.candidates[0]?.content?.parts[0]?.text ? json.candidates[0]?.content?.parts[0]?.text : "Não vou responde sua pergunta, mal educado"} \n💰Não se esqueça de mandar um pix pro dono do bot` || "Nao vou responder sua pergunta seguimore")
//     }
// })

// client.login(process?.env?.DISCORD_BOT_TOKEN)
