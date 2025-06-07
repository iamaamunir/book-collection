import userModel from "../models/user.js";
import { AppError } from "../utils/appError.js";
import { ZodError } from "zod";
import { generateAccessToken, generateRefreshToken } from "../utils/token.js";

export async function signup(payload) {
  try {
    const user = await userModel.findOne({ email: payload.email });
    if (user) {
      throw new AppError("User already exists", 409);
    }

    const userData = {
      firstname: payload.firstname,
      lastname: payload.lastname,
      email: payload.email,
      password: payload.password,
    };
    const newAccount = await userModel.create(userData);
    return newAccount;
  } catch (error) {
    // if (error instanceof ZodError) {

    // }
    if (!(error instanceof AppError)) {
      throw new AppError("Internal server error", 500);
    }
    throw error;
  }
}

export async function login(payload) {
  try {
    const user = await userModel.findOne({ email: payload.email });
    if (!user) {
      throw new AppError("User not found", 404);
    }
    const validPassword = user.isValidPassword(payload.password);
    if (!validPassword) {
      throw new AppError("Password incorrect", 403);
    }
    const access_token = generateAccessToken(user._id, user.emai);
    const refresh_token = generateRefreshToken(user._id, user.email);
    return { access_token: access_token, refresh_token: refresh_token };
  } catch (error) {
    throw error;
  }
}
