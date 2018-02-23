exports.run = (client, message, args) => {
    const Discord = require("discord.js");
let test111 =  message.mentions.members.first();
if(!test111)
{const embed = new Discord.RichEmbed()
  .setTitle("Information du joueur :")
  .setAuthor(message.author.username, message.author.avatarURL)
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("<:gwen:372168110251180042> <:gwen:372168110251180042>")
  .setFooter("🐤", message.author.avatarURL)
  .setImage(message.author.avatarURL)
  .setThumbnail(message.guild.iconURL)
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL(message.author.avatarURL)
  .addField("Account créer le :",
    message.author.createdAt)
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("Id", message.author.id, true)
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("Dernier message : ", message.author.lastMessage)
  .addField("tag", message.author.discriminator)
  .addField("Bot ?", message.author.bot)
  .addField("Status :" , message.author.bot);
  message.channel.send({embed});
}
else{

  const embed = new Discord.RichEmbed()
  .setTitle("Information du joueur :")
  .setAuthor(test111.user.username, test111.user.avatarURL)
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("<:gwen:372168110251180042> <:gwen:372168110251180042>")
  .setFooter("🐤", client.user.avatarURL)
  .setImage(test111.user.avatarURL)
  .setThumbnail(message.guild.iconURL)
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL(test111.user.avatarURL)
  .addField("Account créer le :",
  test111.user.createdAt)
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("Id", test111.user.id, true)
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("Dernier message : ", test111.user.lastMessage)
  .addField("tag", test111.user.discriminator)
  .addField("Bot ?", test111.user.bot)
  .addField("Status :" , "DEV");
  message.channel.send({embed});
}
}