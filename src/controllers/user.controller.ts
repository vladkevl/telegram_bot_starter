import User from '../db/models/user.model';
import {UserInput, UserOuput} from '../db/models/user.model';

class UserController {
    public async createUser(userData: UserInput): Promise<UserOuput> {
        const [instance, created] = await User.upsert(userData);
        return instance;
    }
}

export default UserController;
