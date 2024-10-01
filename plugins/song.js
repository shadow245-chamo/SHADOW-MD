const {cmd , commands} = require('../command')
const yts = require('yt-search');
const fg = require('api-dylux');

// -------- Song/Video Download --------
cmd({
    pattern: 'song',
    alias: ["play", "yt", "ytmp3", "video"],
    desc: 'Download Song / Video',
    use: '.play Title',
    react: "📁",
    category: 'download',
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) return reply('Please provide a name for link ❗');

        const search = await yts(q);
        const data = search.videos[0];
        const url = data.url;

        let desc = `❮❮ 𝗦𝗢𝗡𝗚_𝗩𝗜𝗗𝗘𝗢_𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 ❯❯\`
    
> *\`➤ Title\` :* ${result.title}
    
> *\`➤ Views\` :* ${result.views}
    
> *\`➤ Duration\` :* ${result.duration}
    
> *\`➤ URL\` :* ${result.url}

*❮❮ Reply This Message With Nambars ❯❯*

*➢ 1.1 Audio*
*➢ 1.2 Audio With Document*
*➢ 2.1 Video*
*➢ 2.2 Video With Document Format*

*ꜱʜᴀᴅᴏᴡ ᴍᴅ ᴏᴡɴᴇʀ ʙʏ ʟᴀᴋꜱʜᴀɴ ᴛᴇᴀᴄʜ ➤*`;

        const vv = await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1.1':
                        let down = await fg.yta(url);
                        let downloadUrl = down.dl_url;
                        await conn.sendMessage(from, { audio: { url:downloadUrl }, caption: '*ꜱʜᴀᴅᴏᴡ ᴍᴅ ᴏᴡɴᴇʀ ʙʏ ʟᴀᴋꜱʜᴀɴ ᴛᴇᴀᴄʜ ➤*', mimetype: 'audio/mpeg'},{ quoted: mek });
                        break;
                    case '1.2':               
                        // Send Document File
                        let downdoc = await fg.yta(url);
                        let downloaddocUrl = downdoc.dl_url;
                        await conn.sendMessage(from, { document: { url:downloaddocUrl }, caption: '*ꜱʜᴀᴅᴏᴡ ᴍᴅ ᴏᴡɴᴇʀ ʙʏ ʟᴀᴋꜱʜᴀɴ ᴛᴇᴀᴄʜ ➤*', mimetype: 'audio/mpeg', fileName:data.title + ".mp3"}, { quoted: mek });
                        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } })
                        break;
                    case '2.1':
                        let downvid = await fg.ytv(url);
                        let downloadvUrl = downvid.dl_url;
                        await conn.sendMessage(from, { video : { url:downloadvUrl }, caption: '*ꜱʜᴀᴅᴏᴡ ᴍᴅ ᴏᴡɴᴇʀ ʙʏ ʟᴀᴋꜱʜᴀɴ ᴛᴇᴀᴄʜ ➤*', mimetype: 'video/mp4'},{ quoted: mek });
                        break;
                    case '2.2':
                        let downviddoc = await fg.ytv(url);
                        let downloadvdocUrl = downviddoc.dl_url;
                        await conn.sendMessage(from, { document: { url:downloadvdocUrl }, caption: '*ꜱʜᴀᴅᴏᴡ ᴍᴅ ᴏᴡɴᴇʀ ʙʏ ʟᴀᴋꜱʜᴀɴ ᴛᴇᴀᴄʜ ➤*', mimetype: 'video/mp4', fileName:data.title + ".mp4" }, { quoted: mek });
                        break;
                    default:
                        reply("Invalid option❗");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
