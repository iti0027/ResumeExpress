import { Sequelize } from "sequelize";
import pg from "pg";
import { userModel } from "./entities/user.js";
import { workExpModel } from "./entities/workExperience.js";
import { certificateModel } from "./entities/certifications.js";


const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectModdule: pg,
    protocol: 'postgres',
    dialectOptions: {
        ssl: {require: true, rejectUnauthorized: false}}});

const modelUser = {user: userModel(sequelize, Sequelize)};
const modelWorkExp = {workExperience: workExpModel(sequelize, Sequelize)};
const moduleCert = {certification: certificateModel(sequelize, Sequelize)};

export {sequelize};
export default {modelUser, modelWorkExp, moduleCert};