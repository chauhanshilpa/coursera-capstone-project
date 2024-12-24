import { Link } from "react-router-dom";
import restaurantImage from "../../assets/restaurant.jpg";

const Footer = () => {
  return (
    <footer id="footer">
      <img
        src={restaurantImage}
        alt="Restaurant image"
      />
      <nav className="nav">
        <div className="footer_nav_heading">Doormat Navigation</div>
        <Link to="/">HOME</Link>
        <Link to="/#about">ABOUT</Link>
        <Link to="/#menu">MENU</Link>
        <Link to="/reservation">RESERVATIONS</Link>
        <Link to="/orderOnline">ORDER ONLINE</Link>
        <Link to="/login">LOGIN</Link>
      </nav>
      <div className="contacts">
        <div className="footer_contacts_heading">Contact</div>
        <a href="/">ADDRESS</a>
        <a href="/">PHONE NUMBER</a>
        <a href="/">EMAIL</a>
      </div>
      <div className="socials">
        <div className="footer_socials_heading">Social Media</div>
        <a href="/">Facebook</a>
        <a href="/">Twitter</a>
        <a href="/">Instagram</a>
      </div>
    </footer>
  );
}

export default Footer
