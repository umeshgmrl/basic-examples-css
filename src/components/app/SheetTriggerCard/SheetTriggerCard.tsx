"use client";

import React, { useCallback, useMemo, useRef, useState } from "react";
import { Sheet } from "@silk-hq/components";

import "./SheetTriggerCard.css";

const SheetTriggerCard = ({
  children,
  className,
  href,
  forComponent,
  thumbnail,
  color,
  ...restProps
}: any) => {
  const rootRef = useRef(null);

  const Element = href ? "a" : "button";

  const pointerMoveHandler = useCallback((event: any) => {
    if (!rootRef.current || event.pointerType !== "mouse") return;

    // @ts-ignore
    const rect = rootRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // @ts-ignore
    rootRef.current.style.setProperty("--xPos", `${x}px`);
    // @ts-ignore
    rootRef.current.style.setProperty("--yPos", `${y}px`);
  }, []);

  return (
    <Sheet.Trigger
      className={["SheetTriggerCard-root", `color:${color}`, className].join(
        " "
      )}
      travelAnimation={{ scale: [1, 0.95] }}
      forComponent={forComponent}
      onPointerMove={pointerMoveHandler}
      ref={rootRef}
      href={href}
      {...restProps}
      asChild
    >
      <Element>
        {thumbnail && (
          <img
            className="SheetTriggerCard-image"
            src={thumbnail}
            alt={children?.toString() || ""}
            draggable="false"
          />
        )}
        <div className="SheetTriggerCard-innerShadowClipper">
          <div className="SheetTriggerCard-innerShadow" />
        </div>
        <div className={["SheetTriggerCard-text", `color:${color}`].join(" ")}>
          <span className="SheetTriggerCard-actualText">{children}</span>
        </div>
        <div className="SheetTriggerCard-glow" />
      </Element>
    </Sheet.Trigger>
  );
};

export { SheetTriggerCard };