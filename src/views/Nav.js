import "./Nav.css";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink activeClassName="active-element" to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active-element" to="/timer">
            Timer
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active-element" to="/todo">
            Todo App
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active-element" to="/blog">
            Blog
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
