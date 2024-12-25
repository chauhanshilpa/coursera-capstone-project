const TestimonialCard = ({ record }) => {

  function ratingsGenerator(number){
    let stars = ""
    for(let i=1; i<=number; i++){
      stars += "⭐";
    }
    return stars;
  }

  return (
    <div className="testimonial_card">
      <div className="ratings">{ratingsGenerator(record.rating)}</div>
      <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
        <img src={record.src} alt="user profile image" />
        <div className="name">{record.name}</div>
      </div>
      <p className="reviews">{record.text}</p>
    </div>
  );
};

export default TestimonialCard;
