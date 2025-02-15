// API = Application Programming Interface
// Endpoint - Rota que pode ser acessada dentro de uma API

import express from "express";
import cors from "cors";
import { db } from "./connect.js";
import path from "path";

const __dirname = path.resolve();
const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/", (request, response) => {
  response.send("Olá, Mundo, atualizou? E agora?");
});

app.get("/api/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/api/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.use(express.static(path.join(__dirname, "../front_end/dist")));

app.get("*", async (request, response) => {
  response.sendFile(path.join(__dirname, "../front_end/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor está funcionando na porta ${PORT}`);
});
