import React from "react";
import {NavLink} from "react-router-dom"

export const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className="nav-wrapper blue darken-2 px1">
      <a href="/" className="brand-logo">
        ToDo List
      </a>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/">Список дел</NavLink>
        </li>
        <li>
          <NavLink to="/about">Информация</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
