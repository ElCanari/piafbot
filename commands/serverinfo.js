  exports.run = (client, message, args) => {
  const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Server information",
    url: "",
    description: "Les informations du serveur",
    fields: [{
        name: "Fields",
        value: "They can have different fields with small headlines."
      },
      {
        name: "Masked links",
        value: "You can put [masked links](http://google.com) inside of rich embeds."
      },
      {
        name: "Emojis",
        value: emojiList
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: guild.avatarURL,
      text: "© Example"
    }
  }
});
}
