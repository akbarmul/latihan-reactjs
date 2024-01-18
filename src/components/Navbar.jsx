import React from "react";

import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-slate-300 border-2 border-sky-300">
      <div className="flex justify-between px-5 py-3 container">
        {/* logo */}
        <NavLink to="/">
          <h6 className="text-2xl font-bold text-white">Logo</h6>
        </NavLink>
        {/* menus */}
        <ul className="flex justify-between gap-5">
          <li className="font-bold text-white">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="font-bold text-white">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="font-bold text-white">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
