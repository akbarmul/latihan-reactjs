import React from "react";
import Navbar from "./Navbar";

export default function layout({ children }) {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <footer>ini adalah footer</footer>
    </>
  );
}
