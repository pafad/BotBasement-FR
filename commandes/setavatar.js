exports.run = (client, message, args) => {
if(message.author.id === "377925283098918912"){
        if (!args) return message.channel.send("** ❌ | Vous n'avez rien noté.**");
            message.delete();
            client.user.setAvatar(args);
            message.channel.send("** :white_check_mark: | Avatar changé !**")
        }else{
        message.channel.send(`:x: | ${message.author} tu n'est pas dans le support du bot.`)
        return;
        }
}
