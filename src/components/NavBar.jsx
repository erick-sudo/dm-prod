import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { images } from "../assets/images/images";
import Logo from "./Logo";

export function NavBar() {
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Episodes", path: "/episodes" },
    { name: "Contact", path: "/contact" },
  ];

  const { pathname } = useLocation();

  return (
    <div className="flex flex-col md:flex-row md:items-start p-4">
      <div className="flex">
        <Logo sz={80} />
      </div>
      <div className="flex justify-end flex-grow py-4 px-12 gap-4 text-white text-xs">
        {navItems.map((item, idx) => (
          <div
            onClick={() => navigate(item.path)}
            className={`${
              pathname === item.path ? "ring-1 ring-white" : ""
            } px-4 py-2`}
            key={idx}
          >
            <span className="cursor-pointer duration-300 font-extrabold">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
