
exports.run = (client, message, args) => {
    const Discord = require("discord.js");
    let create = args.slice(0).join(" ");
   
   //message.channel.send("test" + create)
    if(create !== "create")
    {
        message.channel.send("Veuillez rajouter create comme premier argument pour créer un sondage")
    }
    if(create == "create")
    {  let channel1 = args.slice(0);
        message.channel.send("Parfait vous avez commencer la création d'un sondage ! !! <:PandaMagician:385523847342063619> <:PandaMagician:385523847342063619> \nVeuillez spécifiez le channel dans le quel vous voulez le sondage")
        if(channel1)
        {message.channel.send("Le sondage aura lieu dans" + channel1)}
    }

  /*  const embed = new Discord.RichEmbed()
    .setTitle("Role du serveur : " + message.guild.name)
   // .setAuthor(message.author.username, message.author.avatarURL)
    /*
     * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
     */
   // .setColor(0x00AF80)
   // .setDescription("")
   // .setFooter("🐤", client.user.avatarURL)
    //.setImage(message.author.avatarURL)
   // .setThumbnail(message.guild.iconURL)
    /*
     * Takes a Date object, defaults to current date.
     */
   // .setTimestamp()
   // .setURL(message.author.avatarURL)
   // .addField("Role :",
  //    rlist);
    /*
     * Inline fields may not display as inline if the thumbnail and/or image is too big.
     */
   // .addField("Id", message.author.id, true)
    /*
     * Blank field, useful to create some space.
     */
   // .addBlankField(true)
  //  .addField("Dernier message : ", message.author.lastMessage)
    //.addField("tag", message.author.discriminator)
    //.addField("Bot ?", message.author.bot)
    //.addField("Status :" , message.author.bot)
   // message.channel.send({embed}); */
}
