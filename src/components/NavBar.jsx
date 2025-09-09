import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex gap-20">
        {" "}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-l rounded text-center"
              : "flex-1 px-4 py-2 bg-amber-500 text-white font-semibold text-l rounded hover:bg-amber-600 text-center active:bg-green-500"
          }
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/meal-plan"
          className={({ isActive }) =>
            isActive
              ? "flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-l rounded text-center "
              : "flex-1 px-4 py-2 bg-amber-500 text-white font-semibold text-l rounded hover:bg-amber-600 text-center active:bg-green-500 "
          }
        >
          <li>Meal Plan</li>
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive
              ? "flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-l rounded text-center"
              : "flex-1 px-4 py-2 bg-amber-500 text-white font-semibold text-l rounded hover:bg-amber-600 text-center active:bg-green-500"
          }
        >
          <li>Favorite Recipes</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
