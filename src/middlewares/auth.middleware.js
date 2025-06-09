import { verifyToken } from "../utils/token.js";
import { AppError } from "../utils/appError.js";

export const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers?.authorization.split(" ")[1];
    if (!token) {
      throw new AppError("Missing token", 403);
    }

    const decoded = verifyToken(token);

    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      console.log(error);
      throw new AppError("Token verfication failed", 403);
    }
    if (error.name === "TokenExpiredError") {
      throw new AppError("Token Expired", 403);
    }
    console.error("Token verification failed:", error);
    throw error;
  }
};
