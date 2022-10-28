import {DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import sequelize from './../index';

class UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
    declare id: number;
    declare is_bot: boolean;
    declare first_name: string;
    declare last_name: CreationOptional<string>;
    declare username: CreationOptional<string>;
    declare language_code: CreationOptional<string>;
}

UserModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    is_bot: DataTypes.BOOLEAN,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    language_code: DataTypes.STRING
}, {sequelize});

export default UserModel;
