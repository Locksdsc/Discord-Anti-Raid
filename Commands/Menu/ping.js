const discord = require("discord.js");

module.exports = {
  name: "ping",
  category: "info",
  description: "Get the bot's ping!",
  run: async (client, message, args) => {
    let start = Date.now();

    message.channel
      .send({ embed: { description: "Getting the ping", color: "RANDOM" } })
      .then((m) => {
        let end = Date.now();

        let embed = new discord.MessageEmbed()
          .setAuthor("Ping!", message.author.avatarURL())
          .addField("API Latency", Math.round(client.ws.ping) + "ms", true)
          .addField("Message Latency", end - start + "ms", true)
          .setColor("RANDOM");
        m.edit(embed).catch((e) => message.channel.send(e));
      });
  },
};
