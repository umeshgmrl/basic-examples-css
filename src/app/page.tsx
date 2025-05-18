"use client";
import React from "react";
import { Fixed, Island, Sheet, Scroll } from "@silk-hq/components";
import { ExamplePageFromBottom } from "@/components/examples/PageFromBottom/ExamplePageFromBottom";
import { SheetTriggerCard } from "@/components/app/SheetTriggerCard/SheetTriggerCard";
import "./page.css";

const users = [
  {
    name: "Emma Thompson",
    role: "Product Manager",
    totalExpenses: 562.74,
    totalIncome: 1750.00,
    color: "blue",
    transactions: [
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
      }
    ]
  },
  {
    name: "Marcus Chen",
    role: "Software Engineer",
    totalExpenses: 423.50,
    totalIncome: 2100.00,
    color: "green",
    transactions: [
      {
        amount: 2100.00,
        type: "income",
        description: "Monthly Salary",
        date: "2025-03-15"
      },
      {
        amount: -150.50,
        type: "expense",
        description: "Tech Gadgets",
        date: "2025-03-13"
      },
      {
        amount: -273.00,
        type: "expense",
        description: "Online Courses",
        date: "2025-03-10"
      }
    ]
  },
  {
    name: "Sarah Williams",
    role: "Marketing Director",
    totalExpenses: 891.25,
    totalIncome: 1950.00,
    color: "red",
    transactions: [
      {
        amount: 1950.00,
        type: "income",
        description: "Monthly Salary",
        date: "2025-03-15"
      },
      {
        amount: -450.25,
        type: "expense",
        description: "Marketing Tools",
        date: "2025-03-12"
      },
      {
        amount: -441.00,
        type: "expense",
        description: "Client Dinner",
        date: "2025-03-09"
      }
    ]
  },
  {
    name: "James Wilson",
    role: "Financial Analyst",
    totalExpenses: 345.80,
    totalIncome: 1850.00,
    color: "blue",
    transactions: [
      {
        amount: 1850.00,
        type: "income",
        description: "Monthly Salary",
        date: "2025-03-15"
      },
      {
        amount: -245.80,
        type: "expense",
        description: "Financial Software",
        date: "2025-03-11"
      },
      {
        amount: -100.00,
        type: "expense",
        description: "Office Supplies",
        date: "2025-03-08"
      }
    ]
  }
];

export default function Home() {
  return (
    <React.StrictMode>
      <body className="Home-root">
        <main className="Home-main">
          {users.map((user, index) => (
            <Sheet.Root key={index} license="commercial">
              <Sheet.Trigger asChild>
                <SheetTriggerCard color={user.color}>
                  <div className="Home-userCard">
                    <h2 className="Home-userName">{user.name}</h2>
                    <p className="Home-userRole">{user.role}</p>
                    <div className="Home-userStats">
                      <div className="Home-statItem income">
                        <span className="Home-statLabel">Income</span>
                        <span className="Home-statValue">${user.totalIncome.toFixed(2)}</span>
                      </div>
                      <div className="Home-statItem expense">
                        <span className="Home-statLabel">Expenses</span>
                        <span className="Home-statValue">${user.totalExpenses.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </SheetTriggerCard>
              </Sheet.Trigger>
              <ExamplePageFromBottom transactions={user.transactions} userName={user.name} />
            </Sheet.Root>
          ))}
          <div className="Home-topBar">
            <div className="Home-topBarContent">Expense Tracker</div>
          </div>
        </main>
      </body>
    </React.StrictMode>
  );
}