import { instagramStalk } from '@bochilteam/scraper'

let handler= async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `â³ï¸ Escriba un Nombre de Usuario\n\nðEjemplo : ${usedPrefix + command} fg98._`
    const {
        username,
        avatar,
        name,
        description,
        followersH,
        followingH,
        postsH,
    } = await instagramStalk(args[0])
    
    let igst = `
âââã *STALKING* 
â¢ *ð Nombre Completo* : ${name} 
â¢ *ð Username* : ${username}
â¢ *ð¥ Seguidores* : ${followersH}
â¢ *ð« Siguiendo* : ${followingH}
â¢ *ð Bio :* ${description}

â¢ *ð Link* : https://instagram.com/${username.replace(/^@/, '')}
âââââââââââââââ
`
let pp = await( await conn.getFile(avatar)).data
conn.sendFile(m.chat, pp, 'igstalk.jpg', igst, m)
m.react(done)
}

handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['downloader']

handler.command = ['igstalk'] 

export default handler
