exports.run = (client, message) => {
message.channel.send(":white_check_mark:  | help envoyé en mp.")
message.author.send({embed:
    { color: 0x00e0ff, author: {
      name: `menu de ${client.user.tag}`,
        icon_url: client.avatarUrl,
    },
      title: '',
      url: '',
      fields:[
          {
           name: 'Support du bot:',
           value: "m-setpeudo | Changer le pseudo du bot.\n" + "m-setgame | changer le jeu du bot.\n" + "m-logs @mention [texte] | ajouter un bot dans les #bot-list"
          },
          {
           name: 'autres:',
           value: 'm-api | ping du bot'
          },
      ],
      footer:{
      icon_url: message.author.avatarUrl,
      text: "help by shiro."
    },
}})
}
