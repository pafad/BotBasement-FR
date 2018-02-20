exports.run = (client, message) => {
message.channel.send(":white_check_mark:  | help envoyé en mp.")
message.author.send({embed: 
{ color: "RANDOM",
title: `commandes de ${client.user.tag}`
icon_url: message.author.avatarUrl,
description: "m-setpeudo | Changer le pseudo du bot.\n" + "m-setgame | changer le jeu du bot.\n" + "m-logs @mention [texte] | ajouter un bot dans les #bot-list\n" + "m-api | ping du bot.\n",
footer:{
icon_url: cleitn.avatarUrl,
text: "help by shiro."
},
}})
}
