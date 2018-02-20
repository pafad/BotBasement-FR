exports.run = (client, message) => {
if(message.author.id === "317221808405348364" || message.author.id === "169146903462805504" || message.author.id === "306119836503900161"){
         message.channel.send("** :white_check_mark: | mise à jour...**")    
         client.destroy();
         console.log("déco")
         client.login(process.env.Discord_token || process.agrv[2]);
         console.log("reco")
         message.channel.send("** :white_check_mark: | mise à jour terminée...**")
            }else{
         message.channel.send(`:x: | ${message.author} tu n'est pas dans le support du bot.`)
         return;
}
