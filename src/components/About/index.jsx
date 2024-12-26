import twoChefs from "../../assets/Mario-and-Adrian-A.jpg";
import chef from "../../assets/restaurant-chef.jpg";

const About = () => {
  return (
    <div id="about">
      <div className="about_left">
        <h1 className="heading">Little Lemon</h1>
        <h5 className="country">Chicago</h5>
        <p className="description-1">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia enim velit
          mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do
          amet sint. Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non
          deserunt ullamco est sit aliqua dolor do amet sint. Velit officia enim
          velit mollit.
        </p>
        <p className="description-2">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia enim velit
          mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do
          amet sint. Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non
          deserunt ullamco est sit aliqua dolor do amet sint. Velit officia enim
          velit mollit.
        </p>
      </div>
      <div className="about_images">
        <div className="about_image1">
          <img src={chef} alt="Chef Making a dish" />
        </div>
        <div className="about_image2">
          <img
            src={twoChefs}
            alt="Two Chefs Discussing About A Dish"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
