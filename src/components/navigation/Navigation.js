import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";


export default function Navigation() {
  
  return (
    <nav >
        <div className="container">
        <div>

        <Link to="/"><img src="https://avatars1.githubusercontent.com/u/5825944?s=200&v=4" alt="Logo" className="logo-class"/></Link>
           
        </div>
      <ul>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/people"> People</Link>
        </li>
        <li>
          <Link to="locations">Locations </Link>
        </li>
      </ul>
      </div>
    </nav>
  );
}
