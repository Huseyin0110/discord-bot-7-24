const Discord = require('discord.js');


exports.run = function(client, message) {
const eğlence = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('t!duyuru: Sunucuda Duyuru yapmanızı sağlar.\nt!giriş-çıkış-ayarla: Giriş çıkış kanalını ayarlar.\nt!temizle: Bot Discord Chat Temizler.\nt!ban: İstediğiniz kişiyi yasaklar.\nt!oylama: Sunucuda Oylama Yaparsınız. \nt!yapimcim: Yapımcı kim olduğu kişi Gosterir. \nt!sunucular: Botun bulunduğu sunucuları gösterir. \nt!otorol: İstediğiniz rolü sunucuya girenlere otomatikmen verir. \nt!otomesaj: İstediğiniz şeyi bota duyurtur. \nt!kullanıcıbilgim: Komutu kullanan kişi hakkında bilgi verir. \nt!istatistik: Senin istatistik Gösterir. \nt!başvuru: başuru yaaprsınız. \nt!dmat: Özel komut.')
.setTitle('» Moderatör Komutları')
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
  name: 'moderatör', 
  description: 'moderatör komutları gösterir',
  usage: 'moderatör' 
};
