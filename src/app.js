import express from "express";
import userRouter from "./routes/user.route.js";
import bookRouter from "./routes/book.route.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
const app = express();
app.use(express.json());

app.use("/api/v1", userRouter);
app.use("/api/v1", bookRouter);
app.use(errorMiddleware);
export default app;
