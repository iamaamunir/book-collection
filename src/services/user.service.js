import userModel from "../models/user";

export async function signup(payload) {
  try {
    const user = await userModel.findOne({ email: payload.email });
    if (user) {
      // throw error saying user alrwady exists
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
    // handle zod errors and errors not instance of app error
  }
}
