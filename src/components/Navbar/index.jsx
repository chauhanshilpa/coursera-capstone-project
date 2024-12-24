import logo from "../../assets/Logo.svg"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header id="header">
      <img src={logo} alt="logo" width={200} height={60} className="logo"/>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/#about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/reservation">Reservation</Link>
        <Link to="/orderOnline">Order Online</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Navbar;
