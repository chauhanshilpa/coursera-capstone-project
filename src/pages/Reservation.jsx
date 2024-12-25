import BookingForm from "../components/Booking/BookingForm";
import ReservationHero from "../components/Booking/Hero";
import { fetchAPI, submitAPI } from "../utilities/API";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

const updateTimeSlots = (availableTimeSlots, date) => {
  const response = fetchAPI(new Date(date));

  return response.morning.length !== 0 &&
    response.afternoon.length !== 0 &&
    response.evening.length !== 0
    ? response
    : availableTimeSlots;
};

const initTimeSlots = (initAvaliableTimeSlots) => {
  return {
    morning: [
      ...initAvaliableTimeSlots.morning,
      ...fetchAPI(new Date()).morning,
    ],
    afternoon: [
      ...initAvaliableTimeSlots.afternoon,
      ...fetchAPI(new Date()).afternoon,
    ],
    evening: [
      ...initAvaliableTimeSlots.evening,
      ...fetchAPI(new Date()).evening,
    ],
  };
};

const Reservation = () => {
  // Reducer hook which will update the available time slots and initialize the available time slots
  const [availableTimeSlots, dispatchTimeslotsOnDateChange] = useReducer(
    updateTimeSlots,
    { morning: [], afternoon: [], evening: [] },
    initTimeSlots
  );

  const navigate = useNavigate();

  const submitReservation = (reservation) => {
    const response = submitAPI(reservation);
    if (response) {
      navigate("/confirm-booking");
    } else {
      alert("Data Submission Failed");
    }
  };

  return (
    <div id="reservation" className="middle">
    <ReservationHero/>
      <BookingForm
        submitReservation={submitReservation}
        availableTimeSlots={availableTimeSlots}
        dispatchTimeslotsOnDateChange={dispatchTimeslotsOnDateChange}
      />
    </div>
  );
};

export default Reservation;
