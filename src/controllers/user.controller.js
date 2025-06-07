import { signup, login } from "../services/user.service.js";
import signup_validators from "../validators/user.validator.js";

export async function signup_controller(req, res, next) {
  try {
    const validated_data = signup_validators.parse(req.body);
    const newAccount = await signup(validated_data);
    res.json({
      data: newAccount,
      status: "success",
      statusCode: 201,
    });
  } catch (error) {
    next(error);
  }
}

export async function login_controller(req, res, next) {
  try {
    const account = await login(req.body);
    res.json({
      data: {
        access_token: account.access_token,
        refresh_token: account.refresh_token,
      },
      status: "success",
      statusCode: 200,
    });
  } catch (error) {
    next(error);
  }
}
