import express from "express";
import { userRouter } from "./routes/user.route";
const app = express();

app.use("/api/v1", userRouter);
export default app;
