exports.run = (client, message, args) => {
    if(message.author.id === "317221808405348364"){
        if(!args) return message.channel.send(":x: jeu indéfini veuillez noter quelque chose.");
      message.delete();
      client.user.setPresence({game:{name: `#bot-list || ${args}`, url:"https://www.twitch.tv/pafad0gaming",type}})
      message.channel.send("** :white_check_mark: | Jeu changé !**")
    }else{
        if(message.author.id === "169146903462805504"){
            if(!args) return message.channel.send(":x: jeu indéfini veuillez noter quelque chose.");
      message.delete();
      client.user.setPresence({game:{name: `#bot-list || ${args}`, url:"https://www.twitch.tv/pafad0gaming",type}})
      message.channel.send("** :white_check_mark: | Jeu changé !**")
        }else{
            if(message.author.id === "306119836503900161"){
                if(!args) return message.channel.send(":x: jeu indéfini veuillez noter quelque chose.");
      message.delete();
      client.user.setPresence({game:{name: `#bot-list || ${args}`, url:"https://www.twitch.tv/pafad0gaming",type}})
      message.channel.send("** :white_check_mark: | Jeu changé !**") 
            }else{
              message.channel.send(`:x: | ${message.author} tu n'est pas dans le support du bot.`)
              return;
            }
        }
    }
 }
