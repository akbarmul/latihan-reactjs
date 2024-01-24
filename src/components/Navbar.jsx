import React from "react";

import { NavLink } from "react-router-dom";
import Button from "./Button";

import { NavHashLink } from "react-router-hash-link";

export default function Navbar() {
  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="container flex flex-col lg:flex-row items-center justify-between lg:h-20 h-auto py-8 gap-8">
          {/* logo */}
          <NavLink to="/">
            <img src="/logo.svg" alt="logo" />
          </NavLink>
          {/* menus */}
          <ul className="flex flex-wrap justify-center gap-3 items-center lg:gap-8">
            <li className="hover:underline">
              <NavHashLink smooth to="/#feat">
                Features
              </NavHashLink>
            </li>
            <li className="hover:underline">
              <NavLink to="/prices">Prices</NavLink>
            </li>
            <li className="hover:underline">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="hover:underline">
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li className="hover:underline">
              <Button>Get Started</Button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
