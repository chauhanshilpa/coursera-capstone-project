import special1 from "../../assets/greek-salad.jpg";
import special2 from "../../assets/bruchetta.svg";
import special3 from "../../assets/lemon-dessert.jpg";
import DishCard from "./DishCard";

const IMAGES = [
  {
    src: special1,
    alt: "Greek Salad",
    price: 2.96,
  },
  {
    src: special2,
    alt: "Bruchetta",
    price: 7.96,
  },
  {
    src: special3,
    alt: "Lemon Dessert",
    price: 3.99,
  },
];

const Highlights = () => {
  return (
    <div id="highlights">
      <div className="row1">
        <h3 className="heading">Specials</h3>
        <button>Online Menu</button>
      </div>
      <div className="dish-images row2">
        {IMAGES.map((dish, idx) => (
          <DishCard
            key={idx}
            src={dish.src}
            alt={dish.alt}
            price={dish.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Highlights;
