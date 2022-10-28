import UserModel from '../db/models/user.model';

class UserController<User> {
    public createUser = async (userData: User) => await UserModel.upsert(userData);
}

export default UserController;
