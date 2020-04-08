import React from "react";
import { Header } from "./components/header";
import { Balance } from "./components/balance";
import { IncomeExpenses } from "./components/incomeExpenses";
import { TransactionList } from "./components/transactionlist";
import { AddTransaction } from "./components/addtransaction";
import { GlobalProvider } from "./components/context/globalstate";
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
