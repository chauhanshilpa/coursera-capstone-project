import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/restaurant-food.jpg";

const HeroSection = () => {
  const navigate  = useNavigate();

  return (
    <div id="hero">
      <div className="hero-left">
        <div className="heading">Little Lemon</div>
        <div className="country">Chicago</div>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab tempora
          deleniti eum repellat explicabo ratione quisquam fugiat quidem.
          Tempora eius deserunt corrupti esse nemo earum, a doloremque minus
          molestias! Quia.
        </p>
        <button onClick={() => navigate("/reservation")} style={{cursor: "pointer"}}>
          Reserve a Table
        </button>
      </div>
      <div className="hero-right">
        <img src={heroImage} alt="hero-image" />
      </div>
    </div>
  );
}

export default HeroSection
