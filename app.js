const mineflayer = require('mineflayer');

const options = {
    host: 'otgnetwork.aternos.me',
    username: 'BOT'
}




const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const doSomething = async () => {
    while (true) {
        const bot = mineflayer.createBot(options);
        const login = () => {
            bot.chat('123456789')
        }
        bot.once('spawn', login)
        await sleep(600000)
        bot.end()
        await sleep(70000)
    }
}
doSomething();