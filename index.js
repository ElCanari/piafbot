const Discord = require("discord.js");
const client = new Discord.Client({forceFetchUsers: true});
const fs = require("fs");

const config = require("./config.json");
const points = JSON.parse(fs.readFileSync("./points.json", "utf8"));
//let points = JSON.parse(fs.readFileSync("./stone.json", "utf8"));

client.on("message", message => {
  if (!message.content.startsWith(config.prefix)) return;
  if (message.author.bot) return;

  if (!points[message.author.id]) points[message.author.id] = {
    point: 0,
    level: 0,
    arme: 0,
    multiplicateur: 0,
  };
  let userData = points[message.author.id];
  userData.points++;

  //let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
 if(message.content.startsWith(config.prefix + "i"))
 {

message.channel.send({embed: {
    color: 3000000,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Inventaire",
    url: "",
    description: "",
    fields: [{
        name: "Argent",
        value: `${userData.point} argent`
     
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "©:baby_chick:"
    }
  }
});



 }
  fs.writeFile("./points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  });

});
client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);

  console.log("I am ready!");
});
client.login(config.token);
