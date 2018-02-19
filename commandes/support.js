exports.run = (client, message, args) => {
    if (!args) return message.channel.send("** ❌ | Merci de me dire le bug ou la question**");
                message.channel.send("**☑ Votre report a été envoyé** : " + args)
            client.channels.get("415288257870430208").send({embed:{ color: 0x002AD1,
            author:{
            name: "Support du bot",
            icon_url: client.avatarUrl
            }, 
            title: "question/bug",
            url: "",
            thumbnail: message.author.avatarUrl,
            description:"***Question/bug rapporté:***\n\n" + args,
            footer:{
            icon_url: message.author.avatarUrl,
            text: `une question/bug de ${message.author.username}.`
            },
    }})
}
