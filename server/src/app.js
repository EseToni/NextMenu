import express from "express";
import { listen } from "./config/listen.js";
import { dbConnect } from "./config/dbConnect/index.js";
import middlewares from "./config/middlewares.js";

import router from "./routes/index.js";

const app = express();

middlewares(app);

// ROUTES
// http://localhost/api/
app.use("/api", router);

// NOT FOUND
app.use((_, res) => {
  res.status(404).json({
    error: "Unconfigured route, please review the documentation.",
  });
});

listen(app, async () => {
  // Database conexion
  await dbConnect();
});
