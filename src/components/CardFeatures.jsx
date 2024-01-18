import React from "react";

export default function CardFeatures({ children }) {
  return (
    <>
      <div className="bg-white p-10 rounded-md">
        <span class="iconify text-5xl mb-2" data-icon="mdi:fire"></span>
        {children}
      </div>
    </>
  );
}
