import React from "react";

export default function CardPrices({ children }) {
  return (
    <>
      <div className="h-full border-gray-300 border-2 rounded-3xl flex col">
        <div className="flex flex-col px-5 pt-14 pb-5 relative flex-grow">{children}</div>
      </div>
    </>
  );
}
