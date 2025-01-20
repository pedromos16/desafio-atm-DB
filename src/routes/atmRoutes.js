"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const atmController_1 = require("../controller/atmController");
const router = express_1.default.Router();
router.post("/transactions", atmController_1.handleCreateTransaction);
router.get("/transactions/:account_number", atmController_1.handleGetTransactions);
exports.default = router;
