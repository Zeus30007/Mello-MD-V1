
let handler = async (m, { conn}) => {
let user = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let av = `./Media/mp3/${pickRandom(["mello", "mello1", "mello2"])}.mp3`

m.reply( `𓇻Yo ${taguser} Need Help?  Type /help `)
conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
} 

handler.customPrefix = /^(bot|abhishek)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
