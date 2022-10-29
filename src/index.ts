import {Telegraf, Context} from 'telegraf';
import sequelize from './db';
import UserCommands from './commands/user.command';

import * as dotenv from 'dotenv';

dotenv.config();

(async () => {
    console.log('Checking database connection...');
    try {
        const isDev: boolean = process.env.NODE_ENV === 'development';
        await sequelize.authenticate();
        console.log('Database connection OK!');
        await sequelize.sync({ alter: isDev });
        console.log("All models were synchronized successfully.");
    } catch (error: any) {
        console.log('Unable to connect to the database:');
        console.log(error.message);
        process.exit(1);
    }
})();

const bot: Telegraf<Context> = new Telegraf(process.env.BOT_TOKEN as string);

const userCommands = new UserCommands();

bot.start(async (ctx: Context) => {
    const {message} = ctx;
    if (message && message.from) {
        const {from} = message;
        const user = await userCommands.Start(from);
        await ctx.reply(`Hello ${user.first_name}!`);
    }
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
