exports.run = (client, message, args) => {
if(message.author.id === "317221808405348364" || message.author.id === "169146903462805504" || message.author.id === "306119836503900161"){
if (!args) return message.channel.send("** ❌ | Vous n'avez rien noté.**");
           message.delete();
           client.user.setUsername(`${args}`)
           message.channel.send("** :white_check_mark: | Pseudo changé !**").catch(console.error)
              }else{
           message.channel.send(`:x: | ${message.author} tu n'est pas dans le support du bot.`)
       return;
       }
}
