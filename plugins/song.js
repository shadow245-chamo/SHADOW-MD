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
*•.¸💚 shadow 𝐀𝐔𝐃𝐈𝐎 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 🎶 💚¸.•*
|__________________________
| ❤️‍🩹title : ${deta.title}
| ❤️‍🩹description : ${deta.description}
| ❤️‍🩹time : ${deta.timestamp}
| ❤️‍🩹ago : ${deta.ago}
| ❤️‍🩹views : ${deta.views}
|__________________________`


            let buttons = [
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "Audio",
                    id: ".audsong "
                }),
            },
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "Document",
                    id: ".docsong "
                }),
            }
            ]
            let message = {
                image: result.thumbnail,
                header: '',
                footer: config.FOOTER,
                body: desc

            }
            return await conn.sendButtonMessage(from, buttons, m, message)
        } catch (e) {
            console.log(e)
            reply(`${e}`)
        }
    });
