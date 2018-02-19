exports.run = (client, message, args) => {
    if (!args) return message.channel.send("** ❌ | Merci de me dire le bug ou la question**");
                message.channel.send("**☑ Votre report a été envoyé** : " + args)
            client.channels.get("414592429161840663").send({embed:{ color: 0x002AD1,
            author:{
            name: "Support du bot",
            icon_url: client.avatarUrl
            }, 
            title: "question/bug",
            thumbnail: message.author.avatarUrl,
            url: "",
            description:"***Question/bug rapporté:***\n\n" + args,
            footer:{
            icon_url: message.author.avatarUrl,
            text: `une question/bug de ${message.author.username}.`
            },
    }})
}
