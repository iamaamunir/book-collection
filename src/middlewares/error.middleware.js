export const errorMiddleware = (err, res) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  if (process.env.development) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      stack: err.stack,
      error: err
    }
    );
  };
  if (process.env.NODE_ENV === 'production') {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.isOperational ? err.message : "Something went very wrong!",
    });
  }
}
