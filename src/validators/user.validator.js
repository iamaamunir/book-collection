import z from "zod";
const signup_validator = z.object({
  firstname: z.string(),
  lastname: z.string(),
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string with valid email format",
    })
    .email(),
  password: z.string({
    required_error: "Email is required",
    invalid_type_error: "Password must be more than 5 characters",
  }),
});

export default signup_validator;
