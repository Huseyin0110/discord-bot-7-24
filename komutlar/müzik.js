const Discord = require('discord.js');


exports.run = function(client, message) {
const eğlence = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('\nt!çal = Şarkı ismi. \nt!geç = Bot çalan şarkıyı geçer. \nt!durdur = Bot çalan şarkıyı durdurur. \nt!devam = Durdulan şarkıyı devam etirir. \nt!ses = Çalan şarkının sesini ayarlarsınız. \nt!kuyruk = Oynatılacak olan şarkıların listesini gösterir. \nt!çık = Bot sesli kanaldan çıkar.')
.setTitle('» Müzik Komutlar')
.setFooter('© 2018 TheOrder', client.user.avatarURL)
message.channel.send(eğlence)
};

exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'müzik', 
  description: 'Müzik Komutları gösterir',
  usage: 'Müzik' 
};
