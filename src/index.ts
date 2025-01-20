import express from "express";
import sequelize from "./config/database";
import atmRoutes from "./routes/atmRoutes";

const app = express();
app.use(express.json());
app.use("/api", atmRoutes);


sequelize
  .sync({ force: false }) 
  .then(() => {
    console.log("Modelos sincronizados com sucesso!");
    app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
  })
  .catch((error) => console.error("Erro ao sincronizar os modelos:", error));
