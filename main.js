const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "m-"
let type = 1;
//client est prêt
client.on("ready", () => {
console.log('___\nAllumage ou Reboot réussi !\n___\nC\'est allumé ! Le Bots-list va continuer')
client.user.setPresence({game: { name: "#bots-list || BotsB FR", url: "https://www.twitch.tv/pafad0gaming",type}})
});
//join
client.on("guildMemberAdd", member => {
    client.channels.get("414429834689773580").send(`Bienvenue sur le serveur ${member} amuses toi bien !`)
})
//leave
client.on("guildMemberRemove", member =>{
    client.channels.get("414429834689773580").send(`${member} a quitté le serveur !`)
})
//début des commandes
client.on('message', message => {
//définir "args"
let args = message.content.split(" ").slice(1).join(" ");
//support
if (message.content === prefix + "support"){
        let args = message.content.split(" ").slice(1).join(" ");
        if (!args) return message.channel.send("** ❌ | Merci de me dire le bug ou la question**");
            message.channel.send("**☑ Votre report a été envoyé** : " + args)
            var support_embed = new Discord.RichEmbed()
            .setTitle(message.author.username + "#" + message.author.discriminator)
            .setColor('#002AD1')
            .setAuthor("Support du bot")
            .setDescription("***Question/bug donné:***\n\n" + args)
            .setThumbnail(message.author.displayAvatarURL)
        client.channels.get("414592429161840663").send(support_embed)
}
//test
if(message.content === prefix + "test") {
message.reply('Je suis reveillé !') 
}
//api
if(message.content.startsWith === prefix + "api") {
message.channel.send(client.ping + "ms") 
}
//logs
if(message.content.startsWith(prefix + "logs")) {
let usermention = message.mentions.users.first()
if(message.author.id === "317221808405348364" || message.author.id === "169146903462805504" || message.author.id === "306119836503900161"){
    if (!args) return message.channel.send("** ❌ | Vous n'avez rien noté.**");
    if(!usermention) return message.channel.send("** ❌ spécifiez une mention d'un bot.**")
         message.delete();
        message.channel.send("** :white_check_mark: | Votre message a bel et bien été envoyé.**")
        var logs_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setDescription(message.content.substr(29))
            .setThumbnail(usermention.avatarURL)
        client.channels.get("414432717976109062").send(logs_embed)
    }else{
    message.channel.send(`:x: | ${message.author} tu n'est pas dans le support du bot.`)
    return;
    }
}
//setavatar
if(message.content.startsWith(prefix + "setavatar")){
    if(message.author.id === "317221808405348364" || message.author.id === "169146903462805504" || message.author.id === "306119836503900161"){
        if (!args) return message.channel.send("** ❌ | Vous n'avez rien noté.**");
            message.delete();
            client.user.setAvatar(args);
            message.channel.send("** :white_check_mark: | Avatar changé !**").catch(console.error)
        }else{
        message.channel.send(`:x: | ${message.author} tu n'est pas dans le support du bot.`)
        return;
        }
    }
    if(message.content.startsWith(prefix + "setgame")){
        if(message.author.id === "317221808405348364" || message.author.id === "169146903462805504" || message.author.id === "306119836503900161"){
            if (!args) return message.channel.send("** ❌ | Vous n'avez rien noté.**");
                message.delete();
                client.user.setPresence({game:{name: `#bot-list || ${args}`, url:"https://www.twitch.tv/pafad0gaming",type}});
                message.channel.send("** :white_check_mark: | Jeu changé !**").catch(console.error)
            }else{
            message.channel.send(`:x: | ${message.author} tu n'est pas dans le support du bot.`)
            return;
            }
        }
    //setpseudo
        if(message.content === prefix + "setpseudo"){
            if(message.author.id === "317221808405348364" || message.author.id === "169146903462805504" || message.author.id === "306119836503900161"){
                if (!args) return message.channel.send("** ❌ | Vous n'avez rien noté.**");
                    message.delete();
                    client.user.setUsername(`${args}`)
                    message.channel.send("** :white_check_mark: | Pseudo changé !**").catch(console.error)
                }else{
                message.channel.send(`:x: | ${message.author} tu n'est pas dans le support du bot.`)
                return;
                }
            //reload
            if(message.content === prefix + "reload"){
            if(message.author.id === "317221808405348364" || message.author.id === "169146903462805504" || message.author.id === "306119836503900161"){
                message.channel.send("** :white_check_mark: | redémarrage !**")    
                client.destroy();
                console.log("le bot se déconetcé")
                client.login(process.env.Discord_token || process.agrv[2]);
                console.log("opérationnel")
                message.channel.send("** :white_check_mark: | je suis de retour !**")
                }else{
                message.channel.send(`:x: | ${message.author} tu n'est pas dans le support du bot.`)
                return;
                }
        });
client.login(process.env.Discord_token || process.agrv[2]);
