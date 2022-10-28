import {Telegraf, Context} from 'telegraf';
import sequelize from './db';
import UserCommands from './commands/start.command';

import * as dotenv from 'dotenv';

dotenv.config();

(async () => {
    console.log('Checking database connection...');
    try {
        await sequelize.authenticate();
        console.log('Database connection OK!');
        await sequelize.sync();
        console.log("All models were synchronized successfully.");
    } catch (error) {
        console.log('Unable to connect to the database:');
        console.log(error.message);
        process.exit(1);
    }
})();

const bot: Telegraf<Context> = new Telegraf(process.env.BOT_TOKEN as string);

bot.start(async (ctx: Context) => {
    const user = await UserCommands.Start(ctx);
    await ctx.reply(`Hello ${user.first_name}!`);
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
