import { Sequelize } from "sequelize";
import env from "config/env";
import User from "models/User.model";
import Token from "models/Token.model";

const sequelize: Sequelize = new Sequelize({
  dialect: env.DB_DIALECT,
  host: env.DB_HOST,
  port: env.DB_PORT,
  username: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  logging: false,
});

export const db = {
  Sequelize,
  sequelize,

  Token,
  User,
};

export type Db = typeof db;

User.initialize(db.sequelize);
Token.initialize(db.sequelize);

User.associate(db);
Token.associate(db);

export default sequelize;
