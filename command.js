import { REST, Routes } from "discord.js";

const commands = [
  {
    name: "ping",
    description: "Replies with Pong",
  },
  {
    name: "create",
    description: "Creates a new short URL.",
  },
];

const restClient = new REST({ version: 10 }).setToken(
  "MTM0ODg1OTYwMTMyMzI5NDcyMA.G_k2_O.aaad3QTEPZ2gH4YLNiRE1AghUuvNBRGC9IfY4A"
);

try {
  console.log("Started refreshing application (/) commands.");

  await restClient.put(Routes.applicationCommands("1348859601323294720"), {
    body: commands,
  });

  console.log("Successfully reloaded application (/) commands.");
} catch (error) {
  console.error(error);
}
