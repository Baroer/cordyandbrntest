const Discord = require("discord.js");
const db = require("nrc.db")
const ayarlar = require("../ayarlar.json")


module.exports = {
    calistir: async(client, message, args) => {

        const embed = new Discord.MessageEmbed()

        .setColor("BLUE")
        .setThumbnail(`${ayarlar.logo}`)
        .setFooter( ayarlar.bot_name, client.user.avatarURL())
        .setAuthor('Level Sistemi', `${ayarlar.logo}`)
       
        .setDescription(`
       
       ╔═══════╣${ayarlar.bot_name}╠══════════
       ║
       ${client.commands
       
         .filter(cmds => cmds.kategori == "level")
       
         .map(komut => `║ **${ayarlar.prefix}${komut.name}** = ${komut.description || "**Açıklama Eklenmemiş**"}`)
       
         .join('\n')}
       ║
       ║
       ╚══════════════════════════`)
       .setImage(ayarlar.banner)
       .setTimestamp()
         
        
       
       message.channel.send({embeds: [embed]}) 
       

},

name: "level-yardim",
description: "Level Komutlarına Bakarsın",
aliases: ["level-yardım"],
kategori: "yardım",
usage: "",
}