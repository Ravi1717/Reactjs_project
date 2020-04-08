import React, { useContext } from "react";
import { GlobalContext } from "../components/context/globalstate";
import { Transaction } from "../components/transaction";
export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  //console.log(context);
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
