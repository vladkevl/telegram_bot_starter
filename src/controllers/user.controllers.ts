import UserServices from '../services/user.services';
import {UserInput, UserOuput} from '../db/models/user.model';

class UserController {
    public userServices = new UserServices();

    public async createUser(user: UserInput): Promise<UserOuput> {
        return await this.userServices.createUser(user);
    }
}

export default UserController;
