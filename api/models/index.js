import { Sequelize } from "sequelize";


import pg from "pg";
import userModel from "./entities/user.js";
import workExpModel from "./entities/workExperience.js";
import certificateModel from "./entities/certifications.js";


const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectModdule: pg,
    protocol: 'postgres',
    dialectOptions: {
        ssl: {require: true, rejectUnauthorized: false}}});

const models = {
    User: userModel(sequelize, Sequelize),
    Certification: certificateModel(sequelize, Sequelize),
    WorkExperience: workExpModel(sequelize, Sequelize),
};

Object.keys(models).forEach((key) => {
    if("associate" in models[key]) {
        models[key].associate(models);
    }
});


export {sequelize};
export default models;