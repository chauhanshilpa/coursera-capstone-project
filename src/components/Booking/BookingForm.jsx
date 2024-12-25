import moment from "moment";
import { useEffect, useState } from "react";

const BookingForm = ({
  submitReservation,
  availableTimeSlots,
  dispatchTimeslotsOnDateChange,
}) => {
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState("");
  const [ocassion, setOccasion] = useState("birthday");
  const [reservation, setReservation] = useState({
    guests: guests,
    date: "",
    time: "",
    ocassion: ocassion,
  });
  const [isFormValid, setIsFormValid] = useState("");

  useEffect(() => {
    console.log("useEffectRunning");
    const validateReservation = () => {
      if (
        reservation.time !== "" &&
        reservation.date !== "" &&
        reservation.guests !== "" &&
        reservation.ocassion !== ""
      ) {
        setIsFormValid(true);
      } else {
        setIsFormValid(false);
      }
    };
    const time = availableTimeSlots["morning"][0];
    setTime(time);
    setReservation({ ...reservation, time: time });
    validateReservation();
    // eslint-disable-next-line
  }, [time, guests, date, ocassion]);

  const chooseTime = (event) => {
    const time = event.target.value;
    setTime(time);
    setReservation({ ...reservation, time: time });
  };

  const chooseGuest = (event) => {
    const guests = event.target.value;
    setGuests(guests);
    setReservation({ ...reservation, guests: guests });
  };

  const chooseDate = (event) => {
    const newDate = moment(new Date(event.target.value)).format("YYYY-MM-DD");
    setDate(newDate);
    setReservation({ ...reservation, date: newDate });
    dispatchTimeslotsOnDateChange(newDate);
  };

  const chooseOcassion = (event) => {
    const ocassion = event.target.value;
    setOccasion(ocassion);
    setReservation({ ...reservation, ocassion: ocassion });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    submitReservation(reservation);
  };

  return (
    <form
      style={{ display: "grid", gap: "20px" }}
      id="booking_form"
      onSubmit={onSubmitHandler}
    >
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        onChange={chooseGuest}
        value={guests}
      />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" onChange={chooseOcassion} value={ocassion}>
        <option value="birthday">Birthday</option>
        <option value="anniversary">Anniversary</option>
      </select>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" onChange={chooseDate} value={date} />
      <label htmlFor="res-date">Choose time</label>
      <select onChange={chooseTime} value={time}>
        {Object.entries(availableTimeSlots).map(([key, values], idx) => (
          <optgroup key={idx} label={key}>
            {values.map((time, valueIdx) => (
              <option key={valueIdx} value={time}>
                {time}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
      <input
        type="submit"
        value="Make Your reservation"
        className="submit-button"
        disabled={isFormValid ? false : true}
        style={{
          pointerEvents: isFormValid === false && "none",
          opacity: isFormValid === false && "0.7",
        }}
      />
    </form>
  );
};

export default BookingForm;
