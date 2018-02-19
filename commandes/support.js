exports.run = (client, message, args) => {
    if (!args) return message.channel.send("** ❌ | Merci de me dire le bug ou la question**");
                message.channel.send("**☑ Votre report a été envoyé** : " + args)
            client.channels.get("415288257870430208").send('' , { embed: { 
                color: 0x002AD1,
            author:{
            name: "Support du bot",
            icon_url: client.user.avatarUrl,
            }, 
            title: '',
            url: '',
            fields:[
                {
                name:"question/bug rapporté",
                value: args,
                inline:false
                },
                ],
            footer:{
            icon_url: message.author.avatarUrl,
            text: `une question/bug de ${message.author.username}.`
            },
    }})
}
