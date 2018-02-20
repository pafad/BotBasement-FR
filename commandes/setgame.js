exports.run = (client, message, args) => {
if(!message.author.id === "317221808405348364" || !message.author.id === "169146903462805504" || !message.author.id === "306119836503900161"){
  message.channel.send(`:x: | ${message.author} tu n'est pas dans le support du bot.`)
  return;
    }else{
  if(!args) return message.channel.send(":x: jeu indéfini !)
  client.user.setPresence({game:{name: `#bot-list || ${message.content.substr(9)}`, url:"https://www.twitch.tv/pafad0gaming",type}})
  message.delete();
  message.channel.send("** :white_check_mark: | Jeu changé !**")
  message.channel.send(`:x: | ${message.author} tu n'est pas dans le support du bot.`)
    }
}
