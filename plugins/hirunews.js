const { cmd } = require('../command');
const Hiru = require('hirunews-scrap');
cmd({
    pattern: "hirunews",
    desc: "Get the latest news headlines.",
    category: "news",
    react: "📁",
    filename: __filename
},

let activeGroups = {};
let lastNewsTitles = {};

async function getLatestNews() {
    let newsData = [];
    
    // Hiru News
    try {
        const hiruApi = new Hiru();
        const hiruNews = await hiruApi.BreakingNews();
        newsData.push({
            title: hiruNews.results.title,
            content: hiruNews.results.news,
            date: hiruNews.results.date
        });
    } catch (err) {
        console.error(`Error fetching Hiru News: ${err.message}`);
    }
