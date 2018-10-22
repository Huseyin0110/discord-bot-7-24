const Discord = require('discord.js');
const { RichEmbed } = require("discord.js");

exports.run = async (client, msg) => {
  if(!msg.editable) {
    const pingMsg = await msg.reply('Hesaplıyorum. Bu işlem biraz uzun sürebilir...');
    let embed = new RichEmbed()
    .setTitle("🏓 Bunları Hesapladım:")
    .setColor("DARK_BLUE")
    .addField("<:mesaj:478965042897747978> Mesaj Gecikmesi:", `${pingMsg.createdTimestamp - msg.createdTimestamp}ms.`, true)
    .addField(":heart: Ana Gecikme:", `${Math.round(client.ping)}ms.`, true);
    return pingMsg.edit(embed);
  } else {
    await msg.edit('Hesaplıyorum. Bu işlem biraz uzun sürebilir...');
    let embed = new RichEmbed()
    .setTitle("🏓 Bunları Hesapladım:")
    .addField("<:mesaj:478965042897747978> Mesaj Gecikmesi:", `${msg.editedTimestamp - msg.createdTimestamp}ms.`, true)
    .addField(":heart: Ana Gecikme:", `${Math.round(client.ping)}ms.`, true);
    return msg.edit(embed);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ping','p'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun pingini gösterir',
  usage: 'ping'
};