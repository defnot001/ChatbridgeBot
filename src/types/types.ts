export type TConfig = {
  bot: {
    token: string;
    guildID: string;
    clientID: string;
  };
  pterodactyl: {
    URL: string;
    key: string;
  };
  channels: {
    smp: string;
  };
};
