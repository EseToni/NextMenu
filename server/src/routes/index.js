import express from "express";
import fs from "fs";

const router = express.Router();

import { readdirSync } from "fs"; // Usamos fs/promises para las funciones asincrónicas
import { join } from "path";

const PATH_ROUTES = new URL(".", import.meta.url).pathname;

console.log('---------------------->',PATH_ROUTES.split("").splice(1).join(""));

const files = await readdirSync(PATH_ROUTES.split("").splice(1).join(""));

for (const file of files) {
  // items.js => items
  const name = file.split(".").shift();

  if (name !== "index") {
    // http://localhost/api/items
    const module = await import(`./${file}`);
    router.use(`/${name}`, module.default); // Asumiendo que cada módulo exporta por defecto un middleware para el enrutamiento
  }
}

// router.use(`/users`, require(`./users`))

export default router;
