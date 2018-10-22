const Discord = require('discord.js');


exports.run = function(client, message) {
const eğlence = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('t!oyunbilgi: Steamda Olan Butun Oyunların Bilgilerini Gosterebilir. \ntpokemon: Belirtilen Pokemon hakkında bilgi verir.\nt!1vs1: Seçtiğiniz 2 kişiyi savaştırırsınız. \nt!bingo: Bingo oyunu.\nt!fortnite: fortnite bilginizi Gösterir. \nt!minecraft-skin: Belirtilen oyuncunun kostümünü gösterir. \nt!okeyoyna: Okey oynarsınız. \nt!mc-duyuru: Duyuru Yapar. \nt!mcsunucu: Minecraft sunucu bilgisini verir. \ntcsgo! Belirtilen ID yada Nick in Cs:Go istatistiklerini gösterir.')
.setTitle('» oyun Komutlar')
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
  name: 'oyun', 
  description: 'oyun Komutları gösterir',
  usage: 'oyun' 
};
