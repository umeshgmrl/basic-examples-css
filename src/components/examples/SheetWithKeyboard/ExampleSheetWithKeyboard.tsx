"use client";
import { useContext, useState } from "react";
import {
  Sheet,
  Scroll,
  VisuallyHidden,
  useClientMediaQuery,
} from "@silk-hq/components";

import { SheetWithKeyboard } from "./SheetWithKeyboard";
import { SheetTriggerCard } from "@/components/app/SheetTriggerCard/SheetTriggerCard";
import "./ExampleSheetWithKeyboard.css";

const defaultValues = {
  amount: "100",
  description: "Monthly subscription payment",
  date: "2025-03-15",
};

const ExampleSheetWithKeyboard = () => {
  const largeViewport = useClientMediaQuery("(min-width: 800px)");
  const [formValues, setFormValues] = useState(defaultValues);

  return (
    <SheetWithKeyboard
      presentTrigger={
        <SheetTriggerCard color="green">Sheet with Keyboard</SheetTriggerCard>
      }
      sheetContent={
        <div className="ExampleSheetWithKeyboard-root">
          <div className="ExampleSheetWithKeyboard-header">
            <Sheet.Trigger
              className="ExampleSheetWithKeyboard-cancelButton"
              action="dismiss"
            >
              Cancel
            </Sheet.Trigger>
            <Sheet.Title className="ExampleSheetWithKeyboard-title">
              Add Payment
            </Sheet.Title>
            <Sheet.Trigger
              className="ExampleSheetWithKeyboard-saveButton"
              action="dismiss"
            >
              Save
            </Sheet.Trigger>
          </div>
          <Scroll.Root asChild>
            <Scroll.View
              className="ExampleSheetWithKeyboard-scrollView"
              scrollGestureTrap={{ yEnd: !largeViewport }}
            >
              <Scroll.Content className="ExampleSheetWithKeyboard-scrollContent">
                <div className="ExampleSheetWithKeyboard-info">
                  <div className="ExampleSheetWithKeyboard-form">
                    <div className="ExampleSheetWithKeyboard-field">
                      <label
                        htmlFor="amount"
                        className="ExampleSheetWithKeyboard-label"
                      >
                        Amount
                      </label>
                      <p className="ExampleSheetWithKeyboard-labelDescription">
                        Enter the payment amount in dollars
                      </p>
                      <input
                        className="ExampleSheetWithKeyboard-input"
                        id="amount"
                        name="amount"
                        type="number"
                        pattern="\\d*"
                        placeholder="100"
                        value={formValues.amount}
                        onChange={(event) =>
                          setFormValues((prev) => ({
                            ...prev,
                            amount: event.target.value,
                          }))
                        }
                      />
                    </div>

                    <div className="ExampleSheetWithKeyboard-field">
                      <label
                        htmlFor="date"
                        className="ExampleSheetWithKeyboard-label"
                      >
                        Date
                      </label>
                      <p className="ExampleSheetWithKeyboard-labelDescription">
                        Select the payment date
                      </p>
                      <input
                        className="ExampleSheetWithKeyboard-input"
                        id="date"
                        name="date"
                        type="date"
                        value={formValues.date}
                        onChange={(event) =>
                          setFormValues((prev) => ({
                            ...prev,
                            date: event.target.value,
                          }))
                        }
                      />
                    </div>

                    <div className="ExampleSheetWithKeyboard-field fieldType-description">
                      <label
                        htmlFor="description"
                        className="ExampleSheetWithKeyboard-label"
                      >
                        Description
                      </label>
                      <p className="ExampleSheetWithKeyboard-labelDescription">
                        Add a description for this payment
                      </p>
                      <textarea
                        className="ExampleSheetWithKeyboard-textarea"
                        id="description"
                        name="description"
                        rows={3}
                        placeholder="Enter payment description"
                        value={formValues.description}
                        onChange={(event) =>
                          setFormValues((prev) => ({
                            ...prev,
                            description: event.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>
                </div>
              </Scroll.Content>
            </Scroll.View>
          </Scroll.Root>
        </div>
      }
    />
  );
};