import express from "express";

const router = express.Router();

// route => /breeds/...

router.get("/", (_, res) => {
  res.json({
    message: "Welcome to the Breeds API",
  });
});

export default router;
