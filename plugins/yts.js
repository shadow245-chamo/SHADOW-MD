const { cmd } = require('../command');
const yts = require('yt-search');
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
