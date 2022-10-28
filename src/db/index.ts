import {Sequelize} from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'data.db',
    logQueryParameters: true,
    benchmark: true
});

export default sequelize;
