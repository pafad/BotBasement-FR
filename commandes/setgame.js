exports.run = (client, message, args) => {
    if(message.author.id === "377925283098918912"){
        if(!args) return message.channel.send(":x: jeu indéfini veuillez noter quelque chose.");
      message.delete();
      client.user.setPresence({game:{name: "#bot-list || " + message.content.substr(9), url:"https://www.twitch.tv/pafad0gaming",type: 1}})
      message.channel.send("** :white_check_mark: | Jeu changé !**")
    }else{
              message.channel.send(`:x: | ${message.author} tu n'est pas dans le support du bot.`)
              return;
           }
      }
 }
