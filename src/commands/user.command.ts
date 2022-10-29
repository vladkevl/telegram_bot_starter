import UserController from './../controllers/user.controller';
import {UserInput, UserOuput} from '../db/models/user.model';

class UserCommands {
    private userController = new UserController();

    public async Start(user: UserInput): Promise<UserOuput> {
        const createdUser = await this.userController.createUser(user);
        const {id, is_bot, first_name, last_name, username, language_code} = createdUser;
        console.log(`Start from ${first_name} (${id}).`);
        return createdUser;
    }
}

export default UserCommands;
