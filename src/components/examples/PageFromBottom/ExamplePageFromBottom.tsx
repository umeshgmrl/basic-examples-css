import React from "react";
import { Scroll, Sheet } from "@silk-hq/components";
import "./ExamplePageFromBottom.css";
import { PageFromBottom } from "./PageFromBottom";

interface Transaction {
  amount: number;
  type: "income" | "expense";
  description: string;
  date: string;
}

interface ExamplePageFromBottomProps {
  transactions: Transaction[];
  userName: string;
}

export const ExamplePageFromBottom = ({ transactions, userName }: ExamplePageFromBottomProps) => {
  return (
    <PageFromBottom
      sheetContent={
        <Scroll.Root asChild>
          <Scroll.View
            className="ExamplePageFromBottom-scrollView"
            scrollGestureTrap={true}
          >
            <Scroll.Content>
              <div className="ExamplePageFromBottom-transactions">
                <h1 className="ExamplePageFromBottom-title">
                  {userName}'s Transactions
                </h1>
                <div className="ExamplePageFromBottom-transactionList">
                  {transactions.map((transaction, index) => (
                    <div 
                      key={index} 
                      className={`ExamplePageFromBottom-transaction ${transaction.type}`}
                    >
                      <div className="ExamplePageFromBottom-transactionAmount">
                        {transaction.type === 'income' ? '+' : '-'}${Math.abs(transaction.amount).toFixed(2)}
                      </div>
                      <div className="ExamplePageFromBottom-transactionDetails">
                        <div className="ExamplePageFromBottom-transactionDescription">
                          {transaction.description}
                        </div>
                        <div className="ExamplePageFromBottom-transactionDate">
                          {transaction.date}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Scroll.Content>
          </Scroll.View>
        </Scroll.Root>
      }
    />
  );
};