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
       await conn.sendMessage(from, { react: { text: '🎼', key: video.key } })
                    await conn.sendMessage(from, { react: { text: '✅', key: mek.key } })
                    return fs.unlinkSync(`./${randomName}`);
                } else {
                    const document = await conn.sendMessage(from, { document: fs.readFileSync(`./${randomName}`), mimetype: 'video/mp4', fileName: title + '.mp4' }, { quoted: mek })
                    await conn.sendMessage(from, { react: { text: '🎼', key: document.key } })
                    await conn.sendMessage(from, { react: { text: '✅', key: mek.key } })
                    return fs.unlinkSync(`./${randomName}`);
                }
            } else {
                fs.unlinkSync(`./${randomName}`);
                return reply('*File size is too big!*') 
            }     
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

> ꜱɪᴍᴘᴀʟ ᴡᴀᴛꜱ ᴀᴘᴘ ʙᴏᴛ ʙʏ ꜱʜᴀᴅᴏᴡ ᴍᴅ ᴠᴇʀꜱɪᴏɴ 6.0.0 V⚡

> *ꜱʜᴀᴅᴏᴡ ᴍᴅ ᴡᴀᴛꜱ ᴀᴘᴘ ʙᴏᴛ ⚟*
`
   let buttons = [
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "360p",
                    id: ".yt360 " + result.url
                }),
            },
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "720p",
                    id: ".yt720 " + result.url
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
        
        await conn.sendMessage(from, { react: { text: '🎼', key: video.key } })
                    await conn.sendMessage(from, { react: { text: '✅', key: mek.key } })
                    return fs.unlinkSync(`./${randomName}`);
                } else {
                    const document = await conn.sendMessage(from, { document: fs.readFileSync(`./${randomName}`), mimetype: 'video/mp4', fileName: title + '.mp4' }, { quoted: mek })
                    await conn.sendMessage(from, { react: { text: '🎼', key: document.key } })
                    await conn.sendMessage(from, { react: { text: '✅', key: mek.key } })
                    return fs.unlinkSync(`./${randomName}`);
                }
            } else {
                fs.unlinkSync(`./${randomName}`);
                return reply('*File size is too big!*') 
            }     
        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })

//======================yts=================//

cmd({
    pattern: "yts",
    alias: ["ytsearch"],
    use: '.yts lelena',
    react: "🔎",
    desc: 'Search videos from youtube',
    category: "search",
    filename: __filename

},

    async (conn, mek, m, { from, q, reply }) => {
        try {
            if (!q) return await reply('*Please enter a query to search!*')
            var result = await yts(q);
            var msg = '';
            result.videos.map((video) => {
                msg += ' *🖲️' + video.title + '*\n🔗 ' + video.url + '\n\n'
            });
            await conn.sendMessage(from, { text: msg }, { quoted: mek })
        } catch (e) {
            console.log(e)
            reply('*Error !!*')
        }
    });
