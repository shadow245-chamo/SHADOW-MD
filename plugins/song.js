const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')

cmd({
    pattern: "song",
    desc: "download songs",
    category: "download",
    react: "🎧",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*කරුනාකර නමක් හො url එකක් ලබා දෙන්න❗*")
const search = await yts(q)
const data = search.videos[0]
const url = data.url

let desc = `*❮❮❮ SHADOW SONG DOWNLOADER ❯❯❯*

> ➤ *𝗧𝗜𝗧𝗟𝗘* - ${data.title}

> ➤ *𝗩𝗜𝗘𝗪𝗦* - ${data.views}

> ➤ *𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗧𝗜𝗢𝗡* - ${data.description}

> ➤ *𝗧𝗜𝗠𝗘* - ${data.timestamp}

> ➤ *𝗔𝗚𝗢* - ${data.ago}

> plese downlod song send plase waite...🚀💗

> ꜱɪᴍᴘᴀʟ ᴡᴀᴛꜱ ᴀᴘᴘ ʙᴏᴛ ʙʏ ꜱʜᴀᴅᴏᴡ ᴍᴅ ᴠᴇʀꜱɪᴏɴ 6.0.0 V⚡

> *ꜱʜᴀᴅᴏᴡ ᴍᴅ ᴡᴀᴛꜱ ᴀᴘᴘ ʙᴏᴛ ⚟*
`
    let buttons = [
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "Audio",
                    id: ".audsong " + result.url
                }),
            },
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "Document",
                    id: ".docsong " + result.url
                }),
            }
            ]
            let message = {
                image: result.thumbnail,
                header: '',
                footer: config.FOOTER,
                body: msg

            }
            return await conn.sendButtonMessage(from, buttons, m, message)
        } catch (e) {
            console.log(e)
            reply('*Error !!*')
        }
    });
cmd({
    pattern: "audsong",
    react: "🎧",
    dontAddCommandList: true,
    filename: __filename
},

    async (conn, mek, m, { from, q, reply }) => {
        try {
            if (!q) return await reply('*Need a youtube url!*')
            let info = await ytdl.getInfo(q);
            let title = info.videoDetails.title;
            let randomName = getRandom(".mp3");
            const stream = apidylux(q, {
                filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
            })
                .pipe(fs.createWriteStream(`./${randomName}`));
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSize = stats.size / (1024 * 1024);
            if (fileSize <= 1024) {
                let audio = await conn.sendMessage(from, { audio: fs.readFileSync(`./${randomName}`), mimetype: 'audio/mpeg', fileName: `${title}.mp3` }, { quoted: mek })
                await conn.sendMessage(from, { react: { text: '🎼', key: audio.key } })
                await conn.sendMessage(from, { react: { text: '✅', key: mek.key } })
                return fs.unlinkSync(`./${randomName}`);
            } else {
                reply('*File size is too big!*')
            }
            fs.unlinkSync(`./${randomName}`);
        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })

//===========video-dl===========

cmd({
    pattern: "video",
    desc: "download video",
    category: "download",
    react: "📽️",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*කරුනාකර නමක් හො url එකක් ලබා දෙන්න❗*")
const search = await yts(q)
const data = search.videos[0]
const url = data.url

let des = `*❮❮ SHADOW VIDEO DOWNLOADER ❯❯*

> ➤ *𝗧𝗜𝗧𝗟𝗘* - ${data.title}

> ➤ *𝗩𝗜𝗘𝗪𝗦* - ${data.views}

> ➤ *𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗧𝗜𝗢𝗡* - ${data.description}

> ➤ *𝗧𝗜𝗠𝗘* - ${data.timestamp}

> ➤  *𝗔𝗚𝗢* - ${data.ago}

> plese downlod video send plase waite...🚀💗

> ꜱɪᴍᴘᴀʟ ᴡᴀᴛꜱ ᴀᴘᴘ ʙᴏᴛ ʙʏ ꜱʜᴀᴅᴏᴡ ᴍᴅ ᴠᴇʀꜱɪᴏɴ 6.0.0 V⚡

> *ꜱʜᴀᴅᴏᴡ ᴍᴅ ᴡᴀᴛꜱ ᴀᴘᴘ ʙᴏᴛ ⚟*
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:des},{quoted:mek});

//download video

let down = await fg.ytv(url)  
let downloadUrl = down.dl_url

//send video
await conn.sendMessage(from,{video:{url: downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document:{url: downloadUrl},mimetype:"video/mp4",fileName:data.title + "mp4",caption:"> *ᴘᴏᴡᴇʀᴅ ʙʏ ꜱʜᴀᴅᴏᴡ ᴍᴅ ➤*"},{quoted:mek})
    
}catch(a){
reply(`${a}`)
}
})
