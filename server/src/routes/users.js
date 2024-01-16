import express from "express";
const router = express.Router();
import controllers from "../controllers/users.js";

// route => /breeds/...

router.get("/", (_, res) => {
  res.json({
    message: "Welcome to the user API",
  });
});

router.post("/register", controllers.createUser);

router.post("/login", controllers.loginUser);

export default router;
