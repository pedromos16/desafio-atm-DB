"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleGetTransactions = exports.handleCreateTransaction = void 0;
const atmServices_1 = require("../services/atmServices");
const handleCreateTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { account_number, amount, type } = req.body;
    try {
        const transaction = yield (0, atmServices_1.createTransaction)({ account_number, amount, type });
        res.status(201).json(transaction);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao criar a transação", details: error });
    }
});
exports.handleCreateTransaction = handleCreateTransaction;
const handleGetTransactions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { account_number } = req.params;
    try {
        const transactions = yield (0, atmServices_1.getTransactions)(account_number);
        res.status(200).json(transactions);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao buscar transações", details: error });
    }
});
exports.handleGetTransactions = handleGetTransactions;
