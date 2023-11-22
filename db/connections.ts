import { Sequelize } from 'sequelize';

const db = new Sequelize( 'esw_branches', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
});

export default db;
