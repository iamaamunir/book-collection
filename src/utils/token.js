import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();
import CONFIG from "../config/config.js";

export const generateAccessToken = (id, email) => {
  try {
    const expiresIn = CONFIG.ACCESS_TOKEN_EXPIRES_IN;
    const secret = CONFIG.ACCESS_SECRET;
    const options = {
      expiresIn: expiresIn,
    };
    const access_token = jwt.sign({ id, email }, secret, options);
    return access_token;
  } catch (error) {
    throw error;
  }
};

export const generateRefreshToken = (id, email) => {
  try {
    const expiresIn = CONFIG.REFRESH_TOKEN_EXPIRES_IN;
    const secret = CONFIG.REFRESH_TOKEN_EXPIRES_IN;
    const options = {
      expiresIn: expiresIn,
    };
    const refresh_token = jwt.sign({ id, email }, secret, options);
    return refresh_token;
  } catch (error) {
    throw error;
  }
};

export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_SECRET);
    return decoded;
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      console.log(error);
      throw new AppError("Token verfication failed", 403);
    }
    if (error.name === "TokenExpiredError") {
      throw new AppError("Token Expired", 403);
    }
    console.error("Token verification failed:", error);
    return error;
  }
};
