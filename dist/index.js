"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const atmRoutes_1 = __importDefault(require("./routes/atmRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api", atmRoutes_1.default);
// Sincronizar o modelo com o banco de dados
database_1.default
    .sync({ force: false }) // 'force: false' não recria tabelas existentes
    .then(() => {
    console.log("Modelos sincronizados com sucesso!");
    app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
})
    .catch((error) => console.error("Erro ao sincronizar os modelos:", error));
