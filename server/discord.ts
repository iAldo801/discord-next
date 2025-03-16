import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

declare global {
  var __discordClient: Client | undefined;
}

export const client =
  global.__discordClient ||
  new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
    ],
  });

if (!global.__discordClient) {
  client.once('ready', () => {
    console.log(`Discord Bot Logged in as ${client.user?.tag}`);
  });

  client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    if (message.content === '!ping') {
      message.channel.send('Pong!');
    }
  });

  client.login(process.env.DISCORD_TOKEN).catch(console.error);

  global.__discordClient = client;
}
