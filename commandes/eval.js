exports.run = (client, message, args) => {
        if(message.author.id !== '306119836503900161' && message.author.id !=='295908783081914378' && message.author.id !=='317221808405348364'){
            message.channel.send(`:x: ${message.author} Tu n'est pas dans le support du bot.`)
            return;
        }else{
                try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
      message.channel.send({embed:
        {color: 0x00f4ff,
        title: '',
        url: '',
        fields: [
        {
        name: "entrée",
        value: ` \`\`\`xl\n${message.content.substr(5)}\n\`\`\``,
        inline: false
        },
        {
        name: 'sortie',
        value: `\`\`\`xl\n${clean(evaled)}\n\`\`\``,
        inline: false
        }
      ],
      footer:{
        icon_url: client.user.avatarURL,
        text: 'eval by shiro', 
        }}});
    } catch (err) {
      message.channel.send({embed:{
        color: 0x00f4ff,
title: 'érreur',
description: `\`\`\`xl\n${clean(err)}\n\`\`\``,
footer: {
icon_url: client.user.avatarURL,
text: 'eval by shiro'
},
}})
    }
  }
  function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
  }
}
