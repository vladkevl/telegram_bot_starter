import UserController from './../controllers/user.controller';
import {Context} from 'telegraf';
import User from './../interfaces/user.interface';

const userController = new UserController<User>();

class UserCommands {
    public static Start = async (context: Context) => {
        const {message} = context;
        if (message && message.from) {
            const [instance, created] = await userController.createUser(message.from);
            const {id, is_bot, first_name, last_name, username, language_code}: User = instance;
            console.log(`Start from ${first_name} (${id}).`);
            return instance;
        }
    }
}

export default UserCommands;
