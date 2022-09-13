import React from "react";
import { NavLink } from "react-router-dom";

function Navbar()
{
    return(
        <>
  <div class="d-grid">
  <button type="button" class="btn btn-outline-danger btn-block">Tripo Games</button>
</div>


  <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <div className="container-fluid">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
       <NavLink to="/about" className="nav-link">Games</NavLink>
       </li>
       <li className="nav-item">
        <NavLink to="/activities" className="nav-link">Careers</NavLink>
       </li>
       <li>
        <NavLink to="/rate" className="nav-link">About</NavLink>
       </li>
       <li>
        <NavLink to="/Contact" className="nav-link">Contact</NavLink>
       </li>
      </ul>

    </div>

  </nav>

        </>
    );
}
export default Navbar;