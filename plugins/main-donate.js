
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONATION*
Send Redeem Code To This WhatsApp Number +27765453057 🗿`
let img = 'https://telegra.ph/file/c0b06bf53c9e2ab5a1eb7.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
