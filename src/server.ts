import express from "express";
import { AppDataSource } from "./config/data-source";
import * as dotenv from "dotenv";
import cors from "cors";

// Carregar variáveis de ambiente
dotenv.config();

// Configuração do servidor
const app = express();
const API_PORT = parseInt(process.env.API_PORT || "3333");
const CORS_ORIGIN = process.env.CLIENT_URL || "*";

// Habilitar CORS permitindo todos os métodos
app.use(cors({
  origin: CORS_ORIGIN,
  methods: "*", // Permite todos os métodos
  allowedHeaders: "Content-Type",
}));

// Middleware para JSON
app.use(express.json());

// Função para iniciar o servidor
const startServer = async () => {
  try {
    // Inicializa a conexão com o banco de dados com timeout
    const connectionTimeout = 10000; // 10 segundos de timeout
    const connectionPromise = AppDataSource.initialize();

    // Timeout de conexão com banco de dados
    const timeout = new Promise<void>((_, reject) => 
      setTimeout(() => reject(new Error("Database connection timeout")), connectionTimeout)
    );

    // Espera a conexão ou o timeout
    await Promise.race([connectionPromise, timeout]);

    console.log("Connected to the database.");

    // Iniciar o servidor Express e obter a instância do servidor HTTP
    const server = app.listen(API_PORT, () => {
      console.log(`SERVER RUNNING AT: http://localhost:${API_PORT} SEM SSL🔥`);
    });

    // Captura de sinais de terminação (como SIGTERM) para uma finalização limpa
    process.on("SIGTERM", () => {
      console.log("Received SIGTERM, shutting down gracefully...");
      server.close(() => {
        console.log("Server closed");
        process.exit(0);
      });
    });

    process.on("SIGINT", () => {
      console.log("Received SIGINT, shutting down gracefully...");
      server.close(() => {
        console.log("Server closed");
        process.exit(0);
      });
    });

  } catch (error) {
    console.error("Error connecting to the database:", (error as Error).message);
    process.exit(1); // Encerra o processo em caso de erro grave
  }
};

// Chama a função para iniciar o servidor
startServer();

// Captura de exceções não tratadas
process.on("uncaughtException", (error) => {
  if (error instanceof Error) {
    // Agora o TypeScript sabe que o "error" é um tipo Error
    console.error("Uncaught Exception:", error.message);
  } else {
    // Caso o "error" não seja um Error, loga o erro de maneira genérica
    console.error("Uncaught Exception: Unknown error", error);
  }
  process.exit(1); // Encerra o processo com código de erro
});

// Captura de promessas rejeitadas não tratadas
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  process.exit(1); // Encerra o processo em caso de erro grave
});
