import { Request, Response } from "express";
import { createTransaction, getTransactions } from "../services/atmServices";

export const handleCreateTransaction = async (req: Request, res: Response) => {
  const { account_number, amount, type } = req.body;

  try {
    const transaction = await createTransaction({ account_number, amount, type });
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar a transação", details: error });
  }
};

export const handleGetTransactions = async (req: Request, res: Response) => {
  const { account_number } = req.params;

  try {
    const transactions = await getTransactions(account_number);
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar transações", details: error });
  }
};
