import * as express from "express";
import {
  signup_controller,
  login_controller,
} from "../controllers/user.controller.js";
const userRouter = express.Router();

userRouter.post("/signup", signup_controller);
userRouter.post("/login", login_controller);

export default userRouter;
