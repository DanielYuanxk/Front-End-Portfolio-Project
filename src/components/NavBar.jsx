import React from "react";
import { NavLink, useSearchParams } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        {" "}
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/meal-plan">
          <li>Meal Plan</li>
        </NavLink>
        <NavLink to="/favorites">
          <li>Favorite Recipes</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
