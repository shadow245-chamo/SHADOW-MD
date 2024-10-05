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

🧙‍♂️◦https://github.com/QUEEN-KYLIE-MD-01/QUEEN-KYLIE-MD/tree/main

*📍PLEASE FOLLOW MY WHATSAPP CHANNEL❤️‍🔥👇*

🧚‍♀️◦ https://whatsapp.com/channel/0029VaiTjMlK5cDLek3bB533

*ꜱʜᴀᴅᴏᴡ ᴍᴅ ᴍᴀɪɴ ᴏᴡɴᴇʀ ➤*

`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/46873ff90be79238e56e0.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
