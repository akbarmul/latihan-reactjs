import React from "react";

// destructing props assignment
export default function Button({ children }) {
  return <button className="bg-white border-2 border-sky-400 px-5 py-3 rounded-xl hover:bg-sky-700 cursor-pointer font-bold text-1xl">{children}</button>;
}
