import logo from "../../assets/Logo.svg"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header id="header">
      <Link to="/">
        <img src={logo} alt="logo" width={200} height={60} className="logo" />
      </Link>
      <nav className="nav">
        <Link to="/">Home</Link>
        <a href="#about">About</a>
        <a href="#highlights">Menu</a>
        <Link to="/reservation">Reservation</Link>
        <Link to="/orderOnline">Order Online</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Navbar;
