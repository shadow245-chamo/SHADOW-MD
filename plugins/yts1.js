const { cmd } = require('../command');
const yts = require('yt-search');
cmd({
    pattern: "yts1",
    alias: ["yta1","ytv1","yt1"],
    desc: "Search and display up to 100 YouTube video details",
    category: "search",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return reply("Please type a Name or Url...❌");

        const search = await yts(q);
        const videos = search.videos.slice(0, 100); // Get only the first 100 videos

        if (videos.length === 0) return reply("No videos found for your query.");

        let message = `*𝗦𝗛𝗔𝗗𝗢𝗪 𝗠𝗗 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝗦𝗲𝗮𝗿𝗰𝗵 𝗥𝗲𝘀𝘂𝗹𝘁 🎥*\n\n`;

        videos.forEach((data, index) => {
            message += `*No - ${index + 1} ⤵*\n`;
            message += `🎶 *𝗧𝗶𝘁𝗹𝗲*: _${data.title}_\n`;
            message += `👤 *𝗖𝗵𝗮𝗻𝗻𝗲𝗹*: _${data.author.name}_\n`;
            message += `📝 *𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻*: _${data.description}_\n`;
            message += `⏳ *𝗧𝗶𝗺𝗲*: _${data.timestamp}_\n`;
            message += `⏱️ *𝗔𝗴𝗼*: _${data.ago}_\n`;
            message += `🔗 *𝗟𝗶𝗻𝗸*: ${data.url}\n\n`;
        });

        message += `*𝗛𝗼𝘄 𝗧𝗼 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗩𝗶𝗱𝗲𝗼 𝗢𝗿 𝗔𝘂𝗱𝗶𝗼 ✅*\n\n`;
        message += `Example -  .video (enter video title)\n`;
        message += `Example - .song (enter video title)\n\n`;
        message += "manulofficial.vercel.app\n> *ꜱʜᴀᴅᴏᴡ ᴍᴅ ᴡᴀᴛꜱ ᴀᴘᴘ ʙᴏᴛ ➢*";

    } catch (e) {
        console.log(e);
        reply(`Error: ${e.message}`);
    }
});
