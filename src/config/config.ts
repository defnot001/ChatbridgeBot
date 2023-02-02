import dotenv from 'dotenv';
import { TConfig } from '../types/types';

dotenv.config();

const envVariables = {
  bot: {
    token: process.env['BOT_TOKEN'],
    guildID: process.env['GUILD_ID'],
    clientID: process.env['CLIENT_ID'],
  },
  pterodactyl: {
    URL: process.env['PTERO_URL'],
    key: process.env['PTERO_KEY'],
  },
  channels: {
    smp: '1051500062129266730',
  },
};

function hasAllProperties<T>(obj: T): T {
  for (const key in obj) {
    if (obj[key] === undefined || obj[key] === null || obj[key] === '') {
      throw new Error(`Object is missing property: ${key}`);
    }
    if (typeof obj[key] === 'object') {
      hasAllProperties(obj[key]);
    }
  }
  return obj;
}

export const config = hasAllProperties(envVariables) as TConfig;
