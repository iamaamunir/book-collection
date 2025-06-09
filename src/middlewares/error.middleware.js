import { ZodError } from "zod";
import * as mongoose from "mongoose";
export const errorMiddleware = (err, req, res, next) => {
  try {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";

    if (process.env.NODE_ENV === "development") {
      if (err.name === "ZodError" || err instanceof ZodError) {
        return res.status(400).json({
          status: "fail",
          message: "Validation failed",
          errors: err.errors.map((e) => ({
            field: e.path.join("."),
            message: e.message,
          })),
          stack: err.stack,
        });
      }

      return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        stack: err.stack,
        error: err,
      });
    }

    if (process.env.NODE_ENV === "production") {
      res.status(err.statusCode).json({
        status: err.status,
        message: err.isOperational ? err.message : "Something went very wrong!",
      });
    }
  } catch {
    next();
  }
};
