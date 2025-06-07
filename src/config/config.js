import * as dotenv from "dotenv";
dotenv.config();

const CONFIG = {
  PORT: process.env.PORT,
  MONGODB_URL: process.env.MONGODB_URL,
  ACCESS_TOKEN_EXPIRES_IN: process.env.ACCESS_TOKEN_EXPIRES_IN,
  REFRESH_TOKEN_EXPIRES_IN: process.env.REFRESH_TOKEN_EXPIRES_IN,
  ACCESS_SECRET: process.env.ACCESS_SECRET
};

export default CONFIG;
