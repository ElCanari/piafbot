
const Discord = require("discord.js");

const client = new Discord.Client();


const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./db/piafos3.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});


var prefix = "p!";
client.on("ready", () => {

  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 

  client.user.setActivity(`Imagine je suis en ligne en 2019`);
});




client.on("message", async message => {

   if(message.author.bot) return;
  

  if(message.content.indexOf(prefix) !== 0) return;

 
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  // insert one row into the langs table
  const command = args.shift().toLowerCase();
  if(command == "piafos")
  {
  
    let db = new sqlite3.Database('./db/piafos3.db');
    
db.serialize(function() {
  db.run("CREATE TABLE if not exists discord (id INT, dt TEXT)");

  var stmt = db.prepare("INSERT INTO discord VALUES (?,?)");
  for (var i = 0; i < 1; i++) {
  
  var d = new Date();
  var n = d.toLocaleTimeString();
  stmt.run(message.author.id, n,);
  }
  stmt.finalize();

  db.each("SELECT id, dt FROM discord", function(err, row) {
    console.log("User id : "+ row.id, row.dt);
});
});

    db.close()
  }
  if(command == "piaf")
  {
  
    let db = new sqlite3.Database('./db/piafos2.db');
    
db.serialize(function() {
  db.run("CREATE TABLE if not exists discord (id INT, dt TEXT, xp INT)");

  var stmt = db.prepare("INSERT INTO discord VALUES (?,?,?)");
  for (var i = 0; i < 1; i++) {
  
  var d = new Date();
  var n = d.toLocaleTimeString();
  var xp = 0;
  stmt.run(message.author.id, n, xp);
  }
  stmt.finalize();

  db.each("SELECT id, dt, xp FROM discord", function(err, row) {
    console.log("User id : "+ row.id, row.dt, row.xp);
});
});

    db.close()
  }
  if(command == "uptade")
  {     let db = new sqlite3.Database('./db/piafos2.db');
  db.run("UPDATE discord SET xp=100 WHERE xp=0", function(err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Row(s) updated: ${this.changes}`);
   
  });
db.close();
}
  if(command == "piafstats")
  
  {      let db = new sqlite3.Database('./db/piafos2.db');
   db.each("SELECT id, dt, xp FROM discord", function(err, row) {
  message.channel.send(row.id + " date de création : " + row.dt + "xp : " + row.xp);
});

db.close(); }
  if(command == "piafshow")
  
  {      let db = new sqlite3.Database('./db/piafos3.db');
   db.each("SELECT id, dt FROM discord", function(err, row) {
  message.channel.send(row.id + " date de création : " + row.dt);
});

db.close(); }
  // Let's go with a few common example commands! Feel free to delete or change those.
  
  if(command === "ping") {

    const m = await message.channel.send("Ping?");
    m.edit(`Pong! ${m.createdTimestamp - message.createdTimestamp}ms. API ping est ${Math.round(client.ping)}ms`);
  }
  if(command == "close")
  {if(message.author.id == "295908783081914378")
  {
    client.destroy(0);
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});
  }}
});

client.login(":eyes:");