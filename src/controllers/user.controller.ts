import UserModel from '../db/models/user.model';
import User from './../interfaces/user.interface';

class UserController {
    public createUser = async (userData: User) => await UserModel.upsert(userData);
}

export default UserController;
