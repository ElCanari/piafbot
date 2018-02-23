exports.run = (client, message, args) => {
const config = require("../config.json");

    if(message.author.id !== "295908783081914378") return;
  
message.channel.send("bot down")
process.exit(0);
}