import { GatewayIntentBits } from 'discord.js';
import { ExtendedClient } from 'djs-handlers';
import dotenv from 'dotenv';
import { config } from './config/config';
import { projectPaths } from './util/projectPaths';

dotenv.config();
export const client = new ExtendedClient({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.start({
  botToken: config.bot.token,
  guildID: config.bot.guildID,
  commandsPath: projectPaths.commands,
  eventsPath: projectPaths.events,
  type: 'commonJS',
  globalCommands: false,
  registerCommands: false,
});
