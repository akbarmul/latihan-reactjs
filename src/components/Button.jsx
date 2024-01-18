import React from "react";

// destructing props assignment
export default function Button({ children }) {
  return <button className="transition-all py-2 px-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-800 active:bg-green-900 focus:ring focus:ring-green-400">{children}</button>;
}
