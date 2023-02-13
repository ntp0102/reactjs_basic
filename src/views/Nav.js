import "./Nav.css";


const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <a  className="active-element" href="#home">
            Home
          </a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
