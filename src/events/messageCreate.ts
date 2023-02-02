import { Event } from 'djs-handlers';
import { config } from '../config/config';

export default new Event('messageCreate', (message) => {
  if (message.channelId !== config.channels.smp) return;

  console.log(message.content);
});
