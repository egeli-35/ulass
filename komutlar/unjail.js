const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async (client, message, args) => {
 if (!message.member.roles.has('776097590344941579') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`Bu komutu kullanabilmek içni gerekli yetkiye sahip değilsin!`) //KOMUTU KULLANICAK ROLÜN İDSİ
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bir üye etiketlemen gerekiyor!').setColor("Black"));
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
   let reason = args.slice(1).join(" ")
      if(!reason) return message.channel.send("Lütfen Bir Sebep Yazınız.").then(m => m.delete(5000));
          message.react('✅')
  message.guild.members.get(member.id).roles.forEach(r => {
message.guild.members.get(member.id).removeRole(r)

   
})
  member.addRole('776197085754032150') //GENELDE BURAYA KAYITSIZ ROLU İDSİ GİRİLİR YANİ JAİLDEN ÇIKINCA HANGİ ROLE ATICAKSANIZ ONUN İDSİ
     const kanal = message.guild.channels.find(c => c.id == "776166998400958465") //LOGUN ATILACAĞI KANALIN İDSİ
    const embed1 = new Discord.RichEmbed() 
    .setDescription(`${kullanıcı} adlı üye **${reason}** sebebi ile jail'den Çıkarılıp Kayıtsıza Atıldı Tekrar Teyit Vermesi Gerekiyor!`)
    .setColor("RED")
    .setFooter(message.author.tag , message.author.avatarURL)
    .setTimestamp()
  
  
  let embed = new Discord.RichEmbed() 
  .setDescription(`${kullanıcı} adlı üye Affedildi :)`) 
  .setImage('https://cdn.discordapp.com/attachments/673224895756238848/673450899531628544/adalaett.gif')
  .setFooter(`Justice is the basis of property..`)
  .setTimestamp()
  return message.channel.send(embed).then(kanal.send(embed1)).then(m => m.delete(5000));
  
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  kategori: "Yetkili Komutları",
  permLevel: 0
}

exports.help = {
  name: 'unjail',
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: 'kayıt isim yaş'
} 