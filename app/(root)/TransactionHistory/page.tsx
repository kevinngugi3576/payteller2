import TransactionsTable from "@/components/TransactionsTable";
import React from "react";
import { transactions } from "@/constants";

export const dynamic = 'force-dynamic';

const TransactionHistory = () => {
  return (
    <div className="h-screen">
      Recent transactions
      <TransactionsTable transactions={transactions} />
    </div>
  );
};

export default TransactionHistory;



