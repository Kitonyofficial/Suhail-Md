const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_29_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDExLFxuICAgICAgICAxOTUsXG4gICAgICAgIDgxLFxuICAgICAgICAxODMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDYwLFxuICAgICAgICAzNixcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDc1LFxuICAgICAgICA3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDgzLFxuICAgICAgICA2NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEwLFxuICAgICAgICA4NixcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyLFxuICAgICAgICA0MixcbiAgICAgICAgMzcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDgzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYwLFxuICAgICAgICA3NCxcbiAgICAgICAgODksXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQzLFxuICAgICAgICA0NyxcbiAgICAgICAgMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM2LFxuICAgICAgICA1MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTEsXG4gICAgICAgIDY4LFxuICAgICAgICA0MixcbiAgICAgICAgNTIsXG4gICAgICAgIDg3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDY0LFxuICAgICAgICA0NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMixcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjEwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDc0LFxuICAgICAgICA5NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA2NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTksXG4gICAgICAgIDgyLFxuICAgICAgICAzMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3NSxcbiAgICAgICAgMCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMixcbiAgICAgICAgNjMsXG4gICAgICAgIDU2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MSxcbiAgICAgICAgODksXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY2LFxuICAgICAgICA5NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgNixcbiAgICAgICAgOTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MixcbiAgICAgICAgMTU5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm5rbWRYOVR3QkVBaGZyTnh1Y2ZiQTY2QVdQQmpVUUd0Q2ZMdml0cTJPejg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjVaSUZsNFZjUThPVzdjN2dNT0RocFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjJhMGQ5MmQtZTYwYy00NzY5LThjNDAtZjA4YjRmYjVjZjhiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNSxcbiAgICAgIDg0LFxuICAgICAgMTgwLFxuICAgICAgMTA0LFxuICAgICAgMTI2LFxuICAgICAgMjE1LFxuICAgICAgMjIyLFxuICAgICAgMTE5LFxuICAgICAgMjQyLFxuICAgICAgOTYsXG4gICAgICAyMzcsXG4gICAgICAxMDcsXG4gICAgICAxODcsXG4gICAgICAyNDIsXG4gICAgICAzNyxcbiAgICAgIDMwLFxuICAgICAgMjIsXG4gICAgICAxNSxcbiAgICAgIDEzMixcbiAgICAgIDI0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjgsXG4gICAgICAxNDUsXG4gICAgICA0NCxcbiAgICAgIDIzNCxcbiAgICAgIDExOSxcbiAgICAgIDExMCxcbiAgICAgIDExOSxcbiAgICAgIDk4LFxuICAgICAgNjMsXG4gICAgICAxOTAsXG4gICAgICA2NCxcbiAgICAgIDEwNCxcbiAgICAgIDU2LFxuICAgICAgNDEsXG4gICAgICAyNDcsXG4gICAgICAxNDQsXG4gICAgICA2NyxcbiAgICAgIDEzNCxcbiAgICAgIDE2MSxcbiAgICAgIDU3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdZR0JEOVNaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NDg2NTg1MjA6NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJLSVRPTllcIixcbiAgICBcImxpZFwiOiBcIjg5MzgyOTY3MDcwODY5OjcxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09hRjhlUUVFTlNnamJVR0dCWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSDJxU0NWazFZN1FLeFptZGp3dlYzK29GY2psRERkVTFZY0o1ZzlieTBIOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJxZXFFYXFrRytYaVJ3RnU1V3lnNE1zM1JaOC8weE1sVUNDVUVQSmZmWjkzSVFNRVJoVUE2VGt3S0ozbGs0Mm12L2p3VDk5WUFFWndyblJlcVZJWFlBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI4ckw4ZWZwM3lUN1JwQWR5aXRMRW1oYkpVcEpYRE5mUm5PaDROKzJjZmFrMWRsV1FHOHZrWk1vYWtrOU1vM3ZWNWFjbnZSOE1GaTNLUi9pa00rL09EUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NDg2NTg1MjA6NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgODksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE5Nzg5Njlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
