const Discord = require('discord.js');


exports.run = function(client, message) {
const eğlence = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('t!yetkilerim: Komutu kullandığınız sunucudaki yetkilerinizi/izinlerinizi gösterir.\nt!davet : Botun Davet Link Gonderir. \nt!sayaçayarla: Sayacı ayarlar. \nt!atatürk-çerçeve: senin atatürk cerçeva yapar. \nt!mesajdöndür: Mesajınızı tersden yazar. \nt!şikayet: şikayetinizi Bildirirsiniz. \nt!ailemiz: Botun bulunduğu tüm sunucuları gösterir. \nt!kayıt-ol: ❌ＫＡＹＩＴＬＩ ＵＹＥ❌ Bu Rol Olmadan Çalışmaz\ntlevel: Profil level Gösterir. \nt!rolinfo: rolinfo | Rol hakkında bilgi verir.  \nt!diskobilgi: diskobilgi verir. \nt!partnerlik-şartları: partnerlik-şartları oku!. \nt!bug: Botun Sahibine Bug Bildirirsiziniz.\nt!desteksunucu: Botun Destek Sunucusunu Gonderir.\nt!discrim: Belirtilen Tag a sahip kişileri belirtir.\nt!havadurumu: Verdiğiniz konumun hava Durumunu Gösterir.\nt!kanalbilgi: Oldunuz Kanalın Bilgisini Verir.\nt!mcödül: Kanala Minecraft Achievement resmi gönderin\nt!piksel: İstediğiniz Kisinin Resmini Piksel Yaparsiniz.\nt!ping: Botun pingini gösterir\nt!roller: Sunucudaki Rolleri Gosterir.\nt!saat: Oldunuz Yerin Saatini Gosterir.\nt!sunucubilgi: Sana Sunucu Bilgilerini Verir.\nt!sunucuicon: Sunucuicon gösterir. \nt!yavaş-mod: Sohbete yazma sınır (süre) ekler. \nt!rol-bilgi: Etiketlediğiniz rol hakkında bilgi alırsınız. \nt!bugünhavanasıl: Buğünkü havadurumu gösterir.. \nttavsiye: Bot için tavsiye bildirirsiniz.')
.setTitle('» Genel Komutlar')
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
  name: 'genel', 
  description: 'Botun pingini gösterir',
  usage: 'genel' 
};
