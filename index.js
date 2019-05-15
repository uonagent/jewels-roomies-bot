const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)
//bot.command('joke', ({ reply }) => reply('МАКСИМ ПАНК'))
bot.hears(new RegExp('[\\?&]' + 'Максим' + '=([^&#]*)', 'i'), ({ reply }) => reply('ПАНК'))
bot.command('joke', ({
  reply,
  message
}) => reply(`${message.from.username === 'Neksus_5' ? 'ТЫ' : 'МАКСИМ'} ПАНК`))
bot.start(({ reply }) => reply('Hi'))
bot.launch()