const Discord = require('discord.js');


exports.run = (client, message, params) => {
    if(message.author.id === "334694992415162379") {
        
        message.channel.send(':1234: **TheOrder Botu için gerekli şeyler kuruluyor...**');
        
  
            message.guild.createChannel('📖-kurallar-📖');
      message.guild.createChannel('💣-komut-kullanma-💣');
       message.guild.createChannel('📢-duyurular-📢');
       message.guild.createChannel('📥-giriş-çıkış📤');
    message.guild.createChannel('🎶-Müzik-Dinleme-🎶', 'voice');
       message.guild.createChannel('👀-Yönetici-👀', 'voice');
          message.guild.createChannel('📞-Sohbet-📞', 'voice');
         message.guild.createChannel(' 🎮-Fortnite- 🎮', 'voice');
         message.guild.createChannel(' 🎮-Minecrfat- 🎮', 'voice');
         message.guild.createChannel(' 🎮-Cs:Go- 🎮', 'voice');
         message.guild.createChannel(' 🎮-Ets-2- 🎮', 'voice');
        message.guild.createRole({ name: 'Admin', position: 20, permissions: ['MANAGE_MESSAGES', 'MANAGE_ROLES'], color: 'yellow'})
      message.guild.createRole({ name: 'Yönetici', position: 20, permissions: ['MANAGE_MESSAGES', 'MANAGE_ROLES'], color: 'renk'})
      message.guild.createRole({ name: 'Discord yetkilisi', position: 20, permissions: ['MANAGE_MESSAGES', 'MANAGE_ROLES'], color: 'renk'})
        
        message.channel.send(':white_check_mark: **Herşey Kuruldu**');
        
    } else {
        message.channel.send(':x: **Üzgünüm ama bu komutu şimdilik kullanamazsınız!**');
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'kur',
  description: 'Bot için gerekli ayarları kurar.',
  usage: 't!kur'
};