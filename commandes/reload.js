exports.run = (client, message) => {
if(message.author.id === "377925283098918912"){
         message.channel.send("** :white_check_mark: | mise à jour...**")    
         client.destroy();
         console.log("déco")
         client.login(process.env.token);
         console.log("reco")
         message.channel.send("** :white_check_mark: | mise à jour terminée...**")
            }else{
         message.channel.send(`:x: | ${message.author} tu n'est pas dans le support du bot.`)
         return;
}
