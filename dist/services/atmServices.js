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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransactions = exports.createTransaction = void 0;
const Transaction_1 = __importDefault(require("../models/Transaction"));
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const createTransaction = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const adjustedData = Object.assign(Object.assign({}, data), { created_at: (0, moment_timezone_1.default)().tz("America/Sao_Paulo").toDate() });
    return yield Transaction_1.default.create(adjustedData);
});
exports.createTransaction = createTransaction;
const getTransactions = (account_number) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Transaction_1.default.findAll({ where: { account_number } });
});
exports.getTransactions = getTransactions;
