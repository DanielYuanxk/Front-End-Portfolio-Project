import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="w-full">
      <ul
        className="
      w-full max-w-screen-lg mx-auto
      flex items-center gap-6 px-4 py-3
      max-[511px]:flex-col max-[511px]:gap-2
    "
      >
        <li className="flex-1 max-[511px]:w-full max-[511px]:flex-none">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "block w-full text-center px-4 py-2 rounded bg-green-500 text-white font-semibold text-sm hover:bg-green-600 whitespace-nowrap"
                : "block w-full text-center px-4 py-2 rounded bg-amber-500 text-white font-semibold text-sm hover:bg-amber-600 active:bg-green-500 whitespace-nowrap"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="flex-1 max-[511px]:w-full max-[511px]:flex-none">
          <NavLink
            to="/meal-plan"
            className={({ isActive }) =>
              isActive
                ? "block w-full text-center px-4 py-2 rounded bg-green-500 text-white font-semibold text-sm hover:bg-green-600 whitespace-nowrap"
                : "block w-full text-center px-4 py-2 rounded bg-amber-500 text-white font-semibold text-sm hover:bg-amber-600 active:bg-green-500 whitespace-nowrap"
            }
          >
            Meal Plan
          </NavLink>
        </li>
        <li className="flex-1 max-[511px]:w-full max-[511px]:flex-none">
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive
                ? "block w-full text-center px-4 py-2 rounded bg-green-500 text-white font-semibold text-sm hover:bg-green-600 whitespace-nowrap"
                : "block w-full text-center px-4 py-2 rounded bg-amber-500 text-white font-semibold text-sm hover:bg-amber-600 active:bg-green-500 whitespace-nowrap"
            }
          >
            Favorite Recipes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
