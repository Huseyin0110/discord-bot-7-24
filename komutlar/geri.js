const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor('ah be geri gidiyon dikkat et düşme bea.!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://66.media.tumblr.com/ab80899c03fe265261f88dcaf1cd98b6/tumblr_p4lx38cCro1sobo8qo1_400.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'geri',
  description: 'geri gider.',
  usage: 'geri'
};
