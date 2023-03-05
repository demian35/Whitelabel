require('dotenv').config()

const {Telegraf}=require('telegraf');

const axios=require('axios');

const bot=new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) =>{
    ctx.reply("'Hola, ¿Que puedo hacer por ti príncipe? Tu pide")
})

bot.command('Hola', (ctx) =>{
    ctx.reply("Hola, ¿Que puedo hacer por ti príncipe? Tu pide")
})

bot.command('adios', (ctx) => {
    ctx.reply('Bueno ya me voy a dormir, si ven que comparto memes es mi manager ✌🏻')
})

bot.launch()
