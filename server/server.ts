import express from "express";
import cors from "cors";
import http from "http";
import * as dotenv from "dotenv";




// 🔹 Carrega variáveis de ambiente
dotenv.config();

// 🔹 Inicializa o app
const app = express();
const server = http.createServer(app); // Criando um servidor HTTP

// 🔹 Middlewares globais
app.use(cors());
app.use(express.json());

// 🔹 (Futuras rotas vão aqui)


// 🔹 Rota para renomear arquivos manualmente (como antes)

// 🔹 Inicia o servidor
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`CRAFTZWOLF API 🐺 online on port ${PORT}`));
