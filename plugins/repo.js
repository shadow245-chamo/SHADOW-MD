const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "🤗",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

* 🗿REPO LINK 💡*

🧙‍♂️ ➤https://github.com/Shadowteach/SHADOW-MD.git

*👾 ➤ PLEASE FOLLOW MY WHATSAPP CHANNEL👇*

💡 ➤https://whatsapp.com/channel/0029Vajn0gb8F2pFh7PDqO0c

*ꜱʜᴀᴅᴏᴡ ᴍᴅ ᴍᴀɪɴ ᴏᴡɴᴇʀ ➤*

`
await conn.sendMessage(from,{image:{url: `https://i.imgur.com/pJ5WluK.jpeg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
