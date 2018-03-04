exports.run = (client, message, args) => {
    if (!args) return message.channel.send("** ❌ | Merci de me dire le bug ou la question**");
                message.channel.send("**☑ Votre report a été envoyé** : " + args)
            client.channels.get("415288257870430208").send('', { embed: {
      color: 0x002AD1,
      author: {
        name: message.author.tag,
        icon_url: message.author.avatarURL,
      },
      title: '',
      url: '',
      fields: [
        {
          name: 'Question/bug',
          value: args,
          inline: true
        },
      ],
      footer: {
        icon_url: client.user.avatarURL,
        text: client.user.username + " | questions/bug by shiro."
      },
    }})
}
