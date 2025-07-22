import  Sequelize  from "sequelize";

export const sequelize = new Sequelize('Agenda', 'postgres', 'jobmanuel1@', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
    port: 5432
});
