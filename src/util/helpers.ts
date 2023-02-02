import { Client } from 'discord.js';

export function getChannels(client: Client, channelID: string) {
  const channel = client.channels.cache.get(channelID);
  if (!channel) throw new Error(`Channel with ID ${channelID} not found.`);
  return channel;
}
