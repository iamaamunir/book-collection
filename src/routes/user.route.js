import * as express from "express";
import { signup_controller } from "../controllers/user.controller";
const userRouter = express.Router();

userRouter.post("/signup", signup_controller);

export default userRouter;
