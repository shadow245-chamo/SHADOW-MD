const config = require('../config')
const { cmd } = require('../command')
const axios = require('axios')
const { fetchJson } = require('../lib/functions')

const apilink = 'https://dark-yasiya-news-apis.vercel.app/api' // API LINK ( DO NOT CHANGE THIS!! )


// ================================HIRU NEWS========================================

cmd({
    pattern: "hirunews",
    alias: ["hiru","news1"],
    react: "📍",
    desc: "",
    category: "news",
    use: '.hirunews',
    filename: __filename
},
async(conn, mek, m,{from, quoted }) => {
try{

const news = await fetchJson(`${apilink}/hiru`)
  
const msg = `
        ❮❮ 𝗦𝗛𝗔𝗗𝗢𝗪 𝗠𝗗 𝗛𝗜𝗥𝗨 𝗡𝗘𝗪𝗦.𝗟𝗞 ❯❯

       
➤ *Title* - ${news.result.title}

➤ *News* - ${news.result.desc}

➤ *Link* - ${news.result.url}

> ❯❯ ꜱʜᴀᴅᴏᴡ-ᴍᴅ ᴡᴀᴛꜱ ᴀᴘᴘ ʙᴏᴛ ➣`

await conn.sendMessage( from, { image: { url: news.result.image || '' }, caption: msg }, { quoted: mek })
} catch (e) {
console.log(e)
reply(e)
}
})

// ================================SIRASA NEWS========================================

cmd({
    pattern: "sirasanews",
    alias: ["sirasa","news2"],
    react: "📍",
    desc: "",
    category: "news",
    use: '.sirasa',
    filename: __filename
},
async(conn, mek, m,{from, quoted }) => {
try{

const news = await fetchJson(`${apilink}/sirasa`)
  
const msg = `
        ❮❮ 𝗦𝗛𝗔𝗗𝗢𝗪 𝗠𝗗 𝗦𝗜𝗥𝗔𝗦𝗔 𝗡𝗘𝗪𝗦.𝗟𝗞 ❯❯

       
➤ *Title* - ${news.result.title}

➤ *News* - ${news.result.desc}

➤ *Link* - ${news.result.url}

> ❯❯ ꜱʜᴀᴅᴏᴡ-ᴍᴅ ᴡᴀᴛꜱ ᴀᴘᴘ ʙᴏᴛ ➣`


await conn.sendMessage( from, { image: { url: news.result.image || '' }, caption: msg }, { quoted: mek })
} catch (e) {
console.log(e)
reply(e)
}
})

// ================================DERANA NEWS========================================

cmd({
    pattern: "derananews",
    alias: ["derana","news3"],
    react: "📍",
    desc: "",
    category: "news",
    use: '.derana',
    filename: __filename
},
async(conn, mek, m,{from, quoted }) => {
try{

const news = await fetchJson(`${apilink}/derana`)
  
const msg = `
        ❮❮ 𝗦𝗛𝗔𝗗𝗢𝗪 𝗠𝗗 𝗗𝗘𝗥𝗔𝗡𝗔 𝗡𝗘𝗪𝗦.𝗟𝗞 ❯❯

       
➤ *Title* - ${news.result.title}

➤ *News* - ${news.result.desc}

➤ *Link* - ${news.result.url}

> ❯❯ ꜱʜᴀᴅᴏᴡ-ᴍᴅ ᴡᴀᴛꜱ ᴀᴘᴘ ʙᴏᴛ ➣`


await conn.sendMessage( from, { image: { url: news.result.image || '' }, caption: msg }, { quoted: mek })
} catch (e) {
console.log(e)
reply(e)
}
})
