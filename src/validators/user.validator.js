import * as zod from "zod";
const signup_validator = z.object({
  firstname: z.string().trim().min(3),
  lastname: z.string().trim().min(3),
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string with valid email format",
    })
    .email(),
  password: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Password must be more than 5 characters",
    })
    .min(5),
});

export default signup_validator
