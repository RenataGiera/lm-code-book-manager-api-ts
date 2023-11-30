import { Sequelize } from "sequelize";
import { CONFIG } from "../config";
const connString = `${CONFIG.dbDialect}://${CONFIG.dbUserName}:${CONFIG.dbPassword}@${CONFIG.dbHost}:${CONFIG.dbPort}/${CONFIG.dbName}`;

export const sequelize = new Sequelize(connString);
