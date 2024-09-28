const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "mute",	
    alias: ["lock"],
    react: "🔒",
    desc: "mute group.",
    category: "group",
    filename: __filename,
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
   
    
    if (!isGroup) return reply('This command can only be used in a group❗.')
        if (!isBotAdmins) return reply('කරුනාකර ශැඩො md බොට් වෙත ඇඩ්මින් ලබා දෙන්න ❗.')
        if (!isAdmins) return reply('ඔබ owner නොවෙ ❌.')
 

     
            await conn.groupSettingUpdate(m.chat, "announcement")
           const mass = await conn.sendMessage(m.chat, { text: '🔒 GROUP IS CLOSED MY BOT OWNER' }, { quoted: mek });
            return await conn.sendMessage(m.chat, { react: { text: '🔒', key: mass.key } });
} catch(e) {
console.log(e);
reply('*කරුනාකර shadow md bot ට ඇඩ්මින් ලබා දෙන්න ❗❗*')    
} 
})

cmd({
     pattern: "unmute",	
     alias: ["unlock"],
     react: "🔊",
     desc: "mute group.",
     category: "group",
     filename: __filename,
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
        if (!isGroup) return reply('This command can only be used in a group❗.')
        if (!isBotAdmins) return reply('කරුනාකර ශැඩො md බොට් වෙත ඇඩ්මින් ලබා දෙන්න ❗.')
        if (!isAdmins) return reply('ඔබ owner නොවෙ ❌.') 
  
            await conn.groupSettingUpdate(m.chat, "not_announcement")
           const mass = await conn.sendMessage(m.chat, { text: '🔊 GROUP IS OPEN MY BOT OWNER' }, { quoted: mek });
            return await conn.sendMessage(m.chat, { react: { text: '🔊', key: mass.key } });
} catch(e) {
console.log(e);
reply('කරුනාකර shadow md bot ඇඩ්මින් ලබා දෙන්න ❗❗')     
} 
})

cmd({
    pattern: "kick",
    react: "🚫",
    alias: [".."],
    desc: "Kicks replied/quoted user from group.",
    category: "group",
    filename: __filename,
    use: '<quote|reply|number>',
},           
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if(!isOwner ||  !isAdmins)return;
try {
    if (!isGroup) return reply('This command can only be used in a group❗.')
        if (!isBotAdmins) return reply('කරුනාකර ශැඩො md බොට් වෙත ඇඩ්මින් ලබා දෙන්න ❗.')
        if (!isAdmins) return reply('ඔබ owner නොවෙ ❌.') 
  
const user = m.quoted.sender;
if (!user) return reply(mg.nouserforkick);
await conn.groupParticipantsUpdate(m.chat, [user], "remove");
reply(mg.userremoved);
} catch (e) {
reply('*Kick by shadow md bot❗*')
l(e)
}
})


cmd({ 
           pattern: "join",
            desc: "joins group by link",
            category: "main",
            use: '<group link.>',
        },
       async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if(!isOwner && !isSachintha && !isSavi && !isSadas && !isMani && !isMe)return;
    try{  if (!q) return reply(`Please give me Query`);
            if (!q.split(" ")[0] && !q.split(" ")[0].includes("whatsapp.com"))
               reply("Link Invalid, Please Send a valid whatsapp Group Link!");
            let result = q.split(" ")[0].split("https://chat.whatsapp.com/")[1];
            await conn.groupAcceptInvite(result)
                .then((res) => reply("🟩Joined Group"))
                .catch((err) => reply("Error in Joining Group"));
} catch (e) {
reply('*Error !!*')
l(e)
}
})


cmd({
    pattern: "add",
    desc: "Add a member to the group.",
    category: "group",
    react: "🔖",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!isGroup) return reply('This command can only be used in a group❗.')
        if (!isBotAdmins) return reply('කරුනාකර ශැඩො md බොට් වෙත ඇඩ්මින් ලබා දෙන්න ❗.')
        if (!isAdmins) return reply('ඔබ owner නොවෙ ❌.')

        const user = q.split(' ')[0]
        if (!user) return reply('Please provide a phone number to add.')

        await conn.groupParticipantsUpdate(from, [`${user}@s.whatsapp.net`], 'add')
        await reply(`@${user} has been added to the group.`, { mentions: [`${user}@s.whatsapp.net`] })
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
