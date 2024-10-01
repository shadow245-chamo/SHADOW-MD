const {cmd , commands} = require('../command')
const yts = require('yt-search');
const fg = require('api-dylux');
cmd({
    pattern: "song",
    react: "🎵",
    desc: "downlod song",
    category: "downlod",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("❌Please give me url or titel")
 
const search = await yts(q)
const deta = search.videos[0];
const url = deta.url 

let desc= `
*•.¸💚 𝐌𝐀𝐍𝐔-𝐌𝐃 𝐀𝐔𝐃𝐈𝐎 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 🎶 💚¸.•*
|__________________________
| ❤️‍🩹title : ${deta.title}
| ❤️‍🩹description : ${deta.description}
| ❤️‍🩹time : ${deta.timestamp}
| ❤️‍🩹ago : ${deta.ago}
| ❤️‍🩹views : ${deta.views}
|__________________________`

let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: desc
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:deta.thumbnail}}, { upload: conn.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Audio 🎵","id":".ytadl ${deta.url}"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Document 🗂️","id":".ytaddl ${deta.url}"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: njid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: mek })
return await conn.relayMessage(m.chat, msgs.message, {})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
