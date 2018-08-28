exports.run = (client, message, args) => {
if(message.author.id === "317221808405348364" || message.author.id === "169146903462805504" || message.author.id === "377925283098918912"){
           message.delete();
           client.user.setUsername(`${message.guild.name} Bots-List`)
           message.channel.send("** :white_check_mark: | Pseudo changé !**")
              }else{
           message.channel.send(`:x: | ${message.author} tu n'est pas dans le support du bot.`)
       return;
       }
}
