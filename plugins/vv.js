const config = require('../config')
const { cmd, commands } = require('../command')    
     cmd({
        name: "vv",
        alias: ['view', 'retrive'],
        react: "🔂",
        need: "onceview",
        category: "convert",
        desc: "Convert view once messages into standard media",
        filename: __filename
    },
    async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const quoted = pika.quoted;
        if (!quoted || !quoted.message) return pika.reply(`_Tag a once view message with the caption \`${prefix + command}\`_`);
        const isOnceView = quoted.message.imageMessage || quoted.message.videoMessage;
        if (!isOnceView) return pika.reply("_It's not a once view message❗_");      
        const { key } = await pika.keyMsg(Config.message.wait);
        const type = quoted.message.imageMessage ? "image" : "video";
        const extension = type === "image" ? ".jpg" : ".mp4";
        const buffer = await anyaV2.downloadAndSaveMediaMessage(quoted.message[type + "Message"], getRandom(8) + extension, false);
        const caption = quoted.message[type + "Message"]?.caption;
        const message = { 
            [type]: { url: buffer }, 
            ...(caption && { caption: `*Message Senpai:*\n${caption}` })
        };        
        await anyaV2.sendMessage(pika.chat, message, { quoted: pika });
        await pika.deleteMsg(key);
        fs.promises.unlink(buffer);
    }
);
