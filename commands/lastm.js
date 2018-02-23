exports.run = (client, message, args) => {
    let member = message.mentions.members.first();
message.channel.send(client.avatarURL)
}