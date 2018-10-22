const Discord = require('discord.js');


exports.run = function(client, message) {
const eğlence = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('t!pide: Pide Hakkında Fotoğraf Gösterir.  \nt!kebap: Kebapmı İstiyorsun?  \nt!kebappişir: Kebap Pişirirsiniz.  \nt!ramazanpidesi: Canınız Ramazan Pidesimi Çekti?  \nt!lahmacun: Lahmacun Yersiniz!  \nt!kurabiye: Kurabiye Verir.  \n t!baklava: Baklavanın Nasıl Yeneceğini Söyler. \nt!çaydemle: Çay Demlersiniz!  \nt!kebabasor: kebabasor yazı.  \nt!simit: Simit yer.  \nt!8ball: 8Ball Soru Sorarsınız.  \nt!ascii: İstediğiniz şeyi Ascii Cevirir.  \nt!atatürk: Rastgele Atatürk Resmi Atar. \nt!bulanık: İstediğiniz Kisinin Profil Resmini Bulanık Yaparsınız. \nt!emoji-yazı: Yazdınız Yazıyı Emoji Seklinde Size Geri Gonderir. \nt!espri: Bot Espri Soler. \nt!hastebin: Yazdınız Kelimeyi Hastebin çevirir. \nt!öp: öpücük verir. \nt!kapaklaflar: Etiketlediniz Kisiye Kapak Laflar Soler. \nt!saat: Oldunuz Yerin Saatini Gosterir. \nt!tokat: Etiketlediniz Kisiye Tokat Atar. \nt!aşkölçer: Sevdiniz Kisinin Ask Olcer Soler. \nt!söv: söversin  \nt!tarih: Tarihi ve saati gösteririr.  \nt!taskağıtmakas: oyun oynarsın.  \nt!zekayaşım: zekayaşım öğreceksin bea.  \nt!çak: çakarsınız.  \nt!çayaşekerat: Çaya Şeker Atar. \nt!çayiç :Çay İçer.  \nt!cılgın: ÇILGINLIK YAP BİÇIS . \nt!slot: Slots oyunu oynatır.  \nt!yumruk-at: Yumruk Atarsınız. \nt!atombombası: Atom bombası patlat.  \nt!balıktut: Balık Tutarsın.  \nt!coolresim: coolresim gösterir.  \nt!gif: Rastgele gif atar.  \nt!starwars: StarWars Gösterir.  \nt!ağla: Bot U Ağlatırsınız  \nt!öldür: İstediğiniz Kişiyi Öldürürsünüz.  \nt!kafa-dansı: Kafa Dansı yapar.  \nt!içki: İçki İçer.  \nt!korkut: Korkutur.  \nt!tekme-at: İstediğiniz Kişiye tekme Atarsınız.  \nt!sigara: Sigara İçer.  \nt!inek-yazısı: Yazdığınız yazıyı ineğe söyletir.  \nt!serikatil: Botun serikatil Sistemi.  \nt!sosislim: sosislim.  \nt!muzlum: Kaç cm oluğunu söyler.  \nt!köpek: Rasgele köpek resim atar..  \nt!kedi: Rasgele kedi resim atar.. \nt!koş: Koşarsınız. \nt!alkış: Bot Alkışlar. \nt!lenny: Lennyi Tanıyormusun? \nt!kebapye: Kebap yersiniz. \nt!kebapısmarla: Herkese Kebap Ismarlarsınız.')
.setTitle('» Eğlence Komutları')
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
  name: 'eğlence', 
  description:'Eğlence Komutlar Gösterir.',
  usage: 'eğlence' 
};
