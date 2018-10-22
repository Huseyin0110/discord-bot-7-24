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
    .setAuthor('Şöyle bir kafa istiyorum ya ')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://66.media.tumblr.com/ef7de11663d5721059dd31b9e91d9696/tumblr_ou3z60Lg8J1tfmrz4o1_250.gif`)
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
  name: 'atla',
  description: 'kendini suya at',
  usage: 'atla'
};
