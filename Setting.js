const fs = require('fs-extra')
//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '' ;
global.mongodb = process.env.MONGODB_URI || "" ; 
global.port=5000  ;
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID ||'120363169665426586@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363169665426586@g.us' ;
global.email = '' ; 
global.github = 'https://github.com/Vince/Jarvis-Md' ;
global.location = '' ;
global.timezone  = process.env.TIME_ZONE || 'Africa/Lagos'
global.gurl = '' ; 
global.sudo =  process.env.SUDO || "" ;
global.devs = ""; //Dont change it
global.mztit = process.env.MZTIT ||"Jarvis-Md", 
global.Gname = process.env.GNAME ||"Jarvis-Md-sᴜᴘᴘᴏʀᴛ",
global.zyt = process.env.ZYT || '1',
global.waUrl = process.env.WAURL ||"",
global.website = '' ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || '' ;
module.exports = {
  sessionName: process.env.SESSION_ID || '',
  botname: process.env.BOT_NAME || 'Jarvis-Md',
  ownername:  process.env.OWNER_NAME || `Vince`,
  author:  process.env.PACK_AUTHER || 'Vince', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false',
  packname:  process.env.PACK_NAME || "Jarvis-Md" , 
  autoreaction: process.env.AUTO_REACTION || 'true',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'true', 
  antifake :   process.env.FAKE_COUNTRY_CODE ||'212',
  readmessage: process.env.READ_MESSAGE || 'true',
  HANDLERS: process.env.PREFIX || '.',
  warncount : process.env.WARN_COUNT || 2,
  disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog:process.env.MSGS_IN_LOG ||'false',
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS ||'false',
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'true', 
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.BRANCH || 'remove',
  BRANCH: process.env.BRANCH || 'Main',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  caption :process.env.CAPTION || "\t*ᴘᴏᴡᴇʀᴇᴅ ʙʏ Jarvis-Md* ",
  promote_demote_messages : process.env.PROMOTE_DEMOTE_MESSAGES || 'true' ,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||'' ,
  VERSION: process.env.VERSION || 'V.1.0.0',
  LANG: process.env.THEME|| 'Jarvis_Md',
  menu : process.env.MENU || '',
  WORKTYPE: process.env.WORKTYPE || 'private'
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
