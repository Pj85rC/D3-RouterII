import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const setActive = ({ isActive }) => (isActive ? "active" : "noActive");
  return(
  <nav className="navbar">
    <NavLink to="/" className="navLogo">
      
      <img
        src="https://i.imgur.com/v3WB5yX.png"
        alt="Pokelogo"
        referrerPolicy="no-referrer"
      />
    </NavLink>
    <ul className="views">
      <li>
        <NavLink className={setActive} to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className={setActive} to="/detailpokemon">Pokemones</NavLink>
      </li>
    </ul>
    
  </nav>
  );
};

export default Navbar;
