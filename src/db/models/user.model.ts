import {DataTypes, Model, CreationOptional, Optional} from 'sequelize';
import sequelize from './../index';
import {UserAttributes} from '../../interfaces/user.interface';

export interface UserInput extends Optional<UserAttributes, 'last_name' | 'username' | 'language_code'> {
}

export interface UserOuput extends Required<UserAttributes> {
}

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
    declare id: number;
    declare is_bot: boolean;
    declare first_name: string;
    declare last_name: CreationOptional<string>;
    declare username: CreationOptional<string>;
    declare language_code: CreationOptional<string>;
    declare readonly createdAt: CreationOptional<Date>;
    declare readonly updatedAt: CreationOptional<Date>;
    declare readonly deletedAt: CreationOptional<Date>;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    is_bot: DataTypes.BOOLEAN,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    language_code: DataTypes.STRING
}, {
    timestamps: true,
    sequelize: sequelize,
    paranoid: true
});

export default User;
