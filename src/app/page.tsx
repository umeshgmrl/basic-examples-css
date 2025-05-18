"use client";
import React from "react";
import { Fixed, Island, Sheet, Scroll } from "@silk-hq/components";
import { PageFromBottom } from "@/components/examples/PageFromBottom/ExamplePageFromBottom";
import { SheetTriggerCard } from "@/components/app/SheetTriggerCard/SheetTriggerCard";
import "./page.css";

const users = [
  {
    name: "Emma Thompson",
    role: "Product Manager",
    totalExpenses: 562.74,
    totalIncome: 1750.00,
    color: "blue"
  },
  {
    name: "Marcus Chen",
    role: "Software Engineer",
    totalExpenses: 423.50,
    totalIncome: 2100.00,
    color: "green"
  },
  {
    name: "Sarah Williams",
    role: "Marketing Director",
    totalExpenses: 891.25,
    totalIncome: 1950.00,
    color: "red"
  },
  {
    name: "James Wilson",
    role: "Financial Analyst",
    totalExpenses: 345.80,
    totalIncome: 1850.00,
    color: "blue"
  }
];

export default function Home() {
  return (
    <React.StrictMode>
      <body className="Home-root">
        <main className="Home-main">
          {users.map((user, index) => (
            <Sheet.Root key={index} license="commercial">
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
              <PageFromBottom />
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