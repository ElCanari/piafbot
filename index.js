const Discord = require("discord.js");
const client = new Discord.Client({forceFetchUsers: true});
const fs = require("fs");

const config = require("./config.json");

//let points = JSON.parse(fs.readFileSync("./stone.json", "utf8"));

client.on("message", message => {
 

});
client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);

  console.log("I am ready!");
});
client.login(config.token);