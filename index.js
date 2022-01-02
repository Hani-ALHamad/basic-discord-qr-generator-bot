require('dotenv').config() 
const { Client, Intents } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

client.on('ready', () => {
  console.log(`${client.user.tag} bot is up and running!`)
})

client.on('messageCreate', async msg => {
  if (msg.content.split(" ")[0].toLowerCase() === "!qr" && msg.content.length > 4) {
    msg.reply(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(msg.content.substring(4).trim())}`)
  }
})

client.login(process.env.SECRET_TOKEN)