class ErrorHandler {
  static createUserErrorHandler = (error, req, res, next) => {
    console.error("Error in postUserService:", error);

    if (error.name === "Data missing") {
      res
        .status(401)
        .json({
          error: "Data is missing, it could be email, name or password",
        });
    }
    if (error.name === "ValidationError") {
      res
        .status(400)
        .json({ error: "Validation error in createUser operation." });
    } else {
      res
        .status(500)
        .json({ error: "Internal server error while creating user." });
    }
  };
}

export default ErrorHandler;