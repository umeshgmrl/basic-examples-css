import React from "react";
import { Scroll, Sheet } from "@silk-hq/components";

import "./ExamplePageFromBottom.css";
import { PageFromBottom } from "./PageFromBottom";
import { SheetTriggerCard } from "@/components/app/SheetTriggerCard/SheetTriggerCard";

const transactions = [
  {
    amount: 1250.00,
    type: "income",
    description: "Salary Payment",
    date: "2025-03-15"
  },
  {
    amount: -80.50,
    type: "expense",
    description: "Grocery Shopping",
    date: "2025-03-14"
  },
  {
    amount: -45.99,
    type: "expense",
    description: "Netflix Subscription",
    date: "2025-03-13"
  },
  {
    amount: 500.00,
    type: "income",
    description: "Freelance Project",
    date: "2025-03-12"
  },
  {
    amount: -120.00,
    type: "expense",
    description: "Electricity Bill",
    date: "2025-03-11"
  },
  {
    amount: -65.75,
    type: "expense",
    description: "Restaurant Dinner",
    date: "2025-03-10"
  },
  {
    amount: 300.00,
    type: "income",
    description: "Side Gig Payment",
    date: "2025-03-09"
  },
  {
    amount: -200.00,
    type: "expense",
    description: "Phone Bill",
    date: "2025-03-08"
  },
  {
    amount: -55.50,
    type: "expense",
    description: "Gas Station",
    date: "2025-03-07"
  },
  {
    amount: 150.00,
    type: "income",
    description: "Refund",
    date: "2025-03-06"
  }
];

const ExamplePageFromBottom = () => {
  return (
    <PageFromBottom
      presentTrigger={
        <SheetTriggerCard color="blue">Recent Transactions</SheetTriggerCard>
      }
      sheetContent={
        <Scroll.Root asChild>
          <Scroll.View
            className="ExamplePageFromBottom-scrollView"
            scrollGestureTrap={true}
          >
            <Scroll.Content>
              <div className="ExamplePageFromBottom-transactions">
                <h1 className="ExamplePageFromBottom-title">
                  Recent Transactions
                </h1>
                <div className="ExamplePageFromBottom-transactionList">
                  {transactions.map((transaction, index) => (
                    <div 
                      key={index} 
                      className={`ExamplePageFromBottom-transaction ${transaction.type === 'income' ? 'income' : 'expense'}`}
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

export { ExamplePageFromBottom }