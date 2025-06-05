import express from "express";
import { userRouter } from "./routes/user.route";
import { errorMiddleware } from "./middlewares/error.middleware";
const app = express();

app.use("/api/v1", userRouter);
app.use(errorMiddleware)
export default app;
