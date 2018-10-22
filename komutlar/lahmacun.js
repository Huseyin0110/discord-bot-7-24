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
    .setAuthor('Biri Lahmacun Yedi Lahmacun Yedi!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://img-s2.onedio.com/id-57ff58ff64ed0b110c9dcbd5/rev-0/w-635/f-jpg-gif-webp-webm-mp4/s-b1280914fae411f3f88560cb915b0a01994f2c8d.gif`)
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
  name: 'lahmacun',
  description: 'Lahmacun Yersiniz',
  usage: 'lahmacun'
};
