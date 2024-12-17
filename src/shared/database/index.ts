import { AppDataSource } from '../../../data-source'; // Importando a configuração do TypeORM

const connect = async () => {
  try {
    // Inicializando a conexão com o banco de dados
    await AppDataSource.initialize();
    console.log("Connected to the database.");
  } catch (error) {
    console.error("Error connecting to the database", error);
    process.exit(1); // Encerra o processo em caso de erro grave
  }
};

connect(); // Chamando a função para iniciar a conexão
