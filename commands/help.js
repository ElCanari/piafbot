exports.run = (client, message, args) => {
    const Discord = require("discord.js");

const embed = new Discord.RichEmbed()
  .setTitle("Help")
  .setAuthor(message.author.username, message.author.avatarURL)
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("")
  .setFooter(":baby_chick:", client.user.avatarURL)

  .setThumbnail(message.guild.iconURL)
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL(client.user.avatarURL)
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  /*
   * Blank field, useful to create some space.
   */
  //.addBlankField(true)
  .addField("p!serverinfo ", "Information du serveur")
  .addField("p!playerinfo", "Information sur un joueur")
  .addField("p!piaf", "Piaf > all")
  .addField("p!rename", "Permet de renomer quelqu'un")
  .addField("p!ping", "Pong")
  .addField("p!help ", "Tout les commandes")
  .addField("p!info", "Les infos du bot")
  .addField("p!avatar", "avatar")
  .addField("p!ban", "Ban quelqu'un")
  .addField("p!kick", "Kick quelqu'un")
  .addField("p!say", "Je dis ce que tu me dis de dire")
  .addField("p!rlist", "Une liste des roles ( encore en dev car ping tout le monde)")
  .addField("p!8ball", "Le destin")
  .addField("p!8roll", "Un nombre entre 1 et 6")
  .addField("p!elist", "Liste des emojis")
  .addField("p!cookie", "Donne un cookie")
  .addField("p!remindme", "Un remind");
  
  message.channel.send({embed});

}