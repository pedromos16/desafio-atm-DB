import Transaction from "../models/Transaction";
import moment from "moment-timezone";

export const createTransaction = async (data: {
  account_number: string;
  amount: number;
  type: string;
}) => {
  const adjustedData = {
    ...data,
    created_at: moment().tz("America/Sao_Paulo").toDate(),
  };

  return await Transaction.create(adjustedData);
};

export const getTransactions = async (account_number: string) => {
  return await Transaction.findAll({ where: { account_number } });
};
