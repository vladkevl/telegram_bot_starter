import User from '../db/models/user.model';
import {UserInput, UserOuput} from '../db/models/user.model';

class UserServices {
    public user = User;

    public async createUser(userData: UserInput): Promise<UserOuput> {
        const [instance, created] = await this.user.upsert(userData);
        return instance;
    }
}

export default UserServices;
