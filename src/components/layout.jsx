import React from "react";
import Navbar from "./Navbar";

import { NavLink } from "react-router-dom";

export default function layout({ children }) {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <footer className="container grid lg:grid-cols-3 grid-cols-1 py-8 border-t-2  border-gray-200">
        {/* logo */}
        <NavLink to="/">
          <img className="mx-auto lg:mx-0 mb-5 lg:mb-0" src="/logo.svg" alt="logo" />
        </NavLink>
        {/* navbar footer */}
        <nav>
          <ul className="flex justify-center items-center gap-4">
            <li className="hover:underline">
              <NavLink to="/">Features</NavLink>
            </li>
            <li className="hover:underline">
              <NavLink to="/about">Prices</NavLink>
            </li>
            <li className="hover:underline">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="hover:underline">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
        {/* icon sosmed */}
        <ul className="flex items-center gap-4 justify-end text-2xl mx-auto lg:mx-0 mt-3 lg:mt-0">
          <li>
            <NavLink to="#">
              <span class="iconify" data-icon="ic:baseline-facebook"></span>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <span class="iconify" data-icon="mdi:twitter"></span>
            </NavLink>
          </li>
        </ul>
      </footer>
    </>
  );
}
