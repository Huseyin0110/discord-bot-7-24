const Discord = require('discord.js');


exports.run = function(client, message) {
const eğlence = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('t!triggernt!wasted: wasted. \nt!sniper: Tam kafadan. \nt!ara155: polisi ararsınız \nt!dcnitro: tbc \t!geri: ah be geri gidiyon dikkat et düşme bea.! \nt!atla: kendini suya at \nt!kafayıyedim: kafayı yersin. \nt!uç: İstedğiniz kişiye uçan tekme atarsınız. \nt!terlik: İstedğiniz kişiye terlik  atarsınız. \nt!ortaparmak: Dene Ve Gör.')
.setTitle('» Eğlence 2 Komutları')
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
  name: 'eğlence2', 
  description:'Eğlence2 Komutlar Gösterir.',
  usage: 'eğlence2' 
};
