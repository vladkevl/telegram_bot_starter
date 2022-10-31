import {Telegraf, Context} from 'telegraf';
import sequelize from './db';
import UserController from './controllers/user.controllers';

import * as dotenv from 'dotenv';

dotenv.config();

(async () => {
    console.log('Checking database connection...');
    try {
        const isDev: boolean = process.env.NODE_ENV === 'development';
        await sequelize.authenticate();
        console.log('Database connection OK!');
        await sequelize.sync({ alter: isDev });
        console.log('All models were synchronized successfully.');
    } catch (error: any) {
        console.log('Unable to connect to the database:');
        console.log(error.message);
        process.exit(1);
    }
})();

const bot: Telegraf<Context> = new Telegraf(process.env.BOT_TOKEN as string);

const userController = new UserController();

bot.start(async (ctx: Context) => {
    const {message} = ctx;
    if (message && message.from) {
        const {from} = message;
        const user = await userController.createUser(from);
        const {id, is_bot, first_name, last_name, username, language_code} = user;
        console.log(`Start from ${first_name} (${id}).`);
        await ctx.reply(`Hello ${user.first_name}!`);
    }
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
