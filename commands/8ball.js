exports.run = (client, message, args) => {
    var sayings = ["Oui",
    "Non",
    "Peut-être",
    "Certainement !",
    "Peut-être un jour",
    "Pour l'instant non",
    ":baby_chick",
    "Surement",
    "Yes",
    "JAMAIS",
    "Réessayer plus tar",
    "C'est mieux de garder cela secret",
    "Je ne peut prédir cela",
    "N.... un oiseau dans le ciel. ehh..oui",
    "Les piaf décide que oui",
    "Non , tout simplement non",
    "Mes sources disent que non",
    "Outlook not so good",
    "Very doubtful"];
    var pkp = sayings[Math.floor(Math.random()*sayings.length)];
message.channel.send(pkp)

}