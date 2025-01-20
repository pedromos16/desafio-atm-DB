import express from "express";
import { handleCreateTransaction, handleGetTransactions } from "../controller/atmController";

const router = express.Router();

router.post("/transactions", handleCreateTransaction);
router.get("/transactions/:account_number", handleGetTransactions);

export default router;
