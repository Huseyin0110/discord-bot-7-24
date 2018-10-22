const Discord = require('discord.js');


exports.run = function(client, message) {
const eğlence = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('t!hesapla: Belirtilen işlemi yapar. \nt!topla: Yazdığınız iki sayıyı toplar. \nt!çıkar: Yazdığınız iki sayıyı çıkarır. \nt!çarp: Yazdığınız iki sayıyı çapar. \nt!böl yazdığınız iki sayıyı böler. \t!roman: azdığınız sayının romen karşılığını yazar.')
.setTitle('» Matematik Komutları')
.setFooter('© 2018 Tron', client.user.avatarURL)
message.channel.send(eğlence)
};

exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'matematik', 
  description: 'matematik komutları gösterir',
  usage: 'matematik' 
};
