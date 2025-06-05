import userModel from "../models/user.js";
import { AppError } from "../utils/appError.js";
import { ZodError } from "zod";

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
