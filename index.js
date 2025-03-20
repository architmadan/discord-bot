const { Client, Events, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith("create")) {
    const url = message.content.split("create")[1];
    return message.reply({
      content: "Generating ShortId for " + url,
    });
  }

  console.log(message.content);
  //reply
  message.reply("Hello from BOT!");
});

client.on("interactionCreate", (interaction) => {
  console.log(interaction);
  interaction.reply("MK replied!");
});

client.login(
  "MTM0ODg1OTYwMTMyMzI5NDcyMA.G_k2_O.aaad3QTEPZ2gH4YLNiRE1AghUuvNBRGC9IfY4A"
);
