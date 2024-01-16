import "dotenv/config.js";
import mongoConnect from "./engines/mongodb.js";

const DB_ENGINE = process.env.DB_ENGINE;
let dbConnect = () => null;

switch (DB_ENGINE) {
  case "mongodb":
    dbConnect = mongoConnect;
    break;
  default:
    throw new Error("Environment variable 'DB_ENGINE' is not valid.");
}

export { dbConnect };
