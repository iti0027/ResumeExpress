import { Sequelize } from "sequelize";


import pg from "pg";
import userModel from "./entities/user.js";
import workExpModel from "./entities/workExperience.js";
import certificateModel from "./entities/certifications.js";


const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectModule: pg,
    protocol: 'postgres',
    dialectOptions: {
        ssl: {require: true, rejectUnauthorized: false}}});

const models = {
    User: userModel(sequelize, Sequelize),
    Certification: certificateModel(sequelize, Sequelize),
    WorkExperience: workExpModel(sequelize, Sequelize),
};

Object.keys(models).forEach((key) => {
    if(typeof models[key]?.associate === "function") {
        models[key].associate(models);
    }
});


export {sequelize};
export default models;