import deliveryBike from "../../assets/delivery-scooter.svg";

const DishCard = ({ src, alt, price }) => {
  return (
    <div id="dish_card">
      <img src={src} alt={alt} className="dish-image" />
      <div style={{padding: "1rem"}}>
        <div className="name_and_price">
          <div className="title">{alt}</div>
          <p className="price">$ {price}</p>
        </div>
        <p className="dish-description">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit
        </p>
        <div className="order_delivery_bike">
          <p className="order_delivery">Order a delivery</p>
          <img src={deliveryBike} alt="delivery bike" />
        </div>
      </div>
    </div>
  );
};

export default DishCard;
