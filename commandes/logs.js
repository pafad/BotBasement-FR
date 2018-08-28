exports.run = (client, message, args) => {
let usermention = message.mentions.users.first()
if(message.author.id === "377925283098918912"){
    if (!args) return message.channel.send("** ❌ | Vous n'avez rien noté.**");
    if(!usermention) return message.channel.send("** ❌ spécifiez une mention d'un bot.**")
         message.delete();
        message.channel.send("** :white_check_mark: | Votre message a bel et bien été envoyé.**")
        client.channels.get("414432717976109062").send({embed:{color: 0x56FC2D, title: usermention.username, description: message.content.substr(29),thumbnail: usermention.avatarURL, footer:{icon_url: client.avatarUrl, text: `logs by ${client.user.tag}`})
    }else{
    message.channel.send(`:x: | ${message.author} tu n'est pas dans le support du bot.`)
    return;
    }
}
