import TestimonialCard from "./TestimonialCard";

const testimonialDetail = [
  {
    src: "https://images.unsplash.com/photo-1653379671988-b32fceafb5e5?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    name: "Priyanka Singh",
    text: "Lorem ipsum dolor sit amet.",
  },
  {
    src: "https://images.unsplash.com/photo-1649057349440-38c14e985208?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    name: "James Thomas",
    text: "Lorem ipsum dolor sit amet.",
  },
  {
    src: "https://images.unsplash.com/photo-1639747280929-e84ef392c69a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    name: "Thomson",
    text: "Lorem ipsum dolor sit amet.",
  },
  {
    src: "https://images.unsplash.com/photo-1688888745581-fb3f64e60d8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    name: "Illeana Dsouja",
    text: "Lorem ipsum dolor sit amet.",
  },
];

const Testimonials = () => {
  return (
    <div id="testimonial">
      <h5 className="heading">Testimonials</h5>
      <div className="testimonial_container">
        {testimonialDetail.map((record, idx) => (
          <TestimonialCard key={idx} record={record} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
