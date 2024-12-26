import { useEffect, useState } from "react";
import logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import hanburgerIcon from "../../assets/hamburger-icon.svg";

const Navbar = () => {
  const [windowSize, setWindowSize] = useState(window.screen.width);
  const [menuIconClick, setMenuIconClick] = useState(false);

  const actualWidth = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", actualWidth);
    return () => window.removeEventListener("resize", actualWidth);
  });

  return (
    <header id="header">
      <Link to="/">
        <img src={logo} alt="logo" width={200} height={60} className="logo" />
      </Link>
      {windowSize <= "852" ? (
        <img
          src={hanburgerIcon}
          alt="hamburger"
          height="20"
          width="20"
          style={{ justifySelf: "flex-end", cursor: "pointer" }}
          onClick={() => setMenuIconClick(!menuIconClick)}
        />
      ) : (
        <nav className="nav">
          <Link to="/">Home</Link>
          <a href="#about">About</a>
          <a href="#highlights">Menu</a>
          <Link to="/reservation">Reservation</Link>
          <Link to="/orderOnline">Order Online</Link>
          <Link to="/login">Login</Link>
        </nav>
      )}
      {menuIconClick && windowSize <= "852" && (
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: "5px",
            padding: "1rem",
            position: "absolute",
            right: "2rem",
            top: "5rem",
            boxShadow: "1px 1px 5px rgb(27, 27, 27)",
          }}
        >
          <Link to="/">Home</Link>
          <a href="#about">About</a>
          <a href="#highlights">Menu</a>
          <Link to="/reservation">Reservation</Link>
          <Link to="/orderOnline">Order Online</Link>
          <Link to="/login">Login</Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
