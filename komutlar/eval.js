const Discord = require("discord.js");
const util = require('util');

exports.run = async (client, message, args) => {
  
  const hırsızvar = "Tokenimi vermem!"
  
  const ayarlar = client.ayarlar
  
  let bot = client;
  
	if(!args[0]) {
		const embed = new Discord.RichEmbed()
			.setDescription("Deneyebilmek için bir kod yazmalısın!")
			.setColor("RANDOM")
		message.channel.send(embed)
		return
	}
	const code = args.join(' ');
	function clean(text) {
		if (typeof text !== 'string')
			text = require('util').inspect(text, { depth: 0 })
		text = text
			.replace(/`/g, '`' + String.fromCharCode(8203))
			.replace(/@/g, '@' + String.fromCharCode(8203))
		return text;
	};
	async function send(embed) {
		message.channel.send(embed);
	}

	const evalEmbed = new Discord.RichEmbed()
  .setColor("RANDOM")
	try {
		var evaled = clean(await eval(code));
    
    if (code === "2+2" || code === "2 + 2" || code === "Math.floor(2+2)" || code === "Math.floor(2 + 2)") { 
      var evaled = "5"
    };
    
    if(evaled.match(new RegExp(`${client.token}`, 'g'))) evaled.replace(client.token, hırsızvar).replace(process.env.PROJECT_INVITE_TOKEN, hırsızvar);
		if (evaled.constructor.name === 'Promise') evalEmbed.setDescription(`\`\`\`js\n${evaled.replace(client.token, hırsızvar).replace(process.env.PROJECT_INVITE_TOKEN, hırsızvar)}\n\`\`\``)
		else evalEmbed.setDescription(`\`\`\`xl\n${evaled.replace(client.token, hırsızvar).replace(process.env.PROJECT_INVITE_TOKEN, hırsızvar)}\n\`\`\``)
		const newEmbed = new Discord.RichEmbed()
			.addField(`📥 Giriş`, `\`\`\`js\n${code}\n\`\`\``)
			.addField(`📤 Çıkış`, `\`\`\`js\n${evaled.replace(client.token, hırsızvar).replace(process.env.PROJECT_INVITE_TOKEN, hırsızvar)}\n\`\`\``)
			.setColor("RANDOM")
		message.channel.send(newEmbed,);
	}
	catch (err) {
		evalEmbed.addField(`Hata:`, `\`\`\`js\n${err}\n\`\`\``);
		evalEmbed.setColor('RANDOM');
		message.channel.send(evalEmbed);
	}
};

exports.conf = {
	enable: true, //komut kullanılabilir durumdamı değil mi onu belirtiyoruz true veya false olarak
	aliases: ["kod", "kod-çalıştır", "kod-dene", "kodçalıştır", "koddene"], //komutu asıl ismi dışında kullanabileceğimiz isimleri yazıyorsunuz
	permLevel: 5, /*Kullanabilecek yetkiyi belirtiyorsunuz bulunan yetkilerin sayıları:
	0 = Yetki gerekmez herkes kullanabilir.
	1 = Mesjları Yönet yetkisi gerekir.
	2 = Üyeleri At yetkisi gerekir.
	3 = Üyeleri Yasakla yetkisi gerekir.
	4 = Yönetici yetkisi gerekir.
	5 = Bot yapımcısı olmak gerekir.
	*/
	kategori: "yapımcı" //Komutun kategorisini belirtiyoruz
};

exports.help = {
	name: "eval", //Komutun ismini belirtiyoruz
	description: "Bir Javasciprt kodunu denemeyi sağlar.", //Komutun açıklamasını yazıyoruz
	usage: "eval <kod>" //Komutun Doğru Kullanım'ını yazıyoruz
};

