import { signup } from "../services/user.service.js";
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
