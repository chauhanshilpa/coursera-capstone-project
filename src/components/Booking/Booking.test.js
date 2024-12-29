import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm from "./BookingForm";
import "@testing-library/jest-dom";

describe("BookingForm Component", () => {
  let submitReservationMock;
  let dispatchTimeslotsOnDateChangeMock;
  let availableTimeSlots;

  // Initialize mocks and props before each test
  beforeEach(() => {
    submitReservationMock = jest.fn();
    dispatchTimeslotsOnDateChangeMock = jest.fn();
    availableTimeSlots = {
      morning: ["08:00 AM", "09:00 AM"],
      afternoon: ["12:00 PM", "01:00 PM"],
    };
  });

  test("renders all input fields correctly", () => {
    render(
      <BookingForm
        submitReservation={submitReservationMock}
        dispatchTimeslotsOnDateChange={dispatchTimeslotsOnDateChangeMock}
        availableTimeSlots={availableTimeSlots}
      />
    );

    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Make Your reservation/i })
    ).toBeDisabled();
  });

  test("allows user to input guests, date, occasion, and time", async () => {
    render(
      <BookingForm
        submitReservation={submitReservationMock}
        dispatchTimeslotsOnDateChange={dispatchTimeslotsOnDateChangeMock}
        availableTimeSlots={availableTimeSlots}
      />
    );

    const guestsInput = screen.getByLabelText(/Number of guests/i);
    const dateInput = screen.getByLabelText(/Choose date/i);
    const occasionSelect = screen.getByLabelText(/Occasion/i);
    const timeSelect = screen.getByLabelText(/Choose time/i);

    // Change guests
    fireEvent.change(guestsInput, { target: { value: "3" } });
    expect(guestsInput.value).toBe("3");

    // Change date
    fireEvent.change(dateInput, { target: { value: "2024-07-15" } });
    expect(dateInput.value).toBe("2024-07-15");
    expect(dispatchTimeslotsOnDateChangeMock).toHaveBeenCalledWith(
      "2024-07-15"
    );

    // Change occasion
    fireEvent.change(occasionSelect, { target: { value: "anniversary" } });
    expect(occasionSelect.value).toBe("anniversary");

    // Change time
    fireEvent.change(timeSelect, { target: { value: "09:00 AM" } });
    expect(timeSelect.value).toBe("09:00 AM");
  });

  test("enables submit button when form is valid", async () => {
    render(
      <BookingForm
        submitReservation={submitReservationMock}
        dispatchTimeslotsOnDateChange={dispatchTimeslotsOnDateChangeMock}
        availableTimeSlots={availableTimeSlots}
      />
    );

    const guestsInput = screen.getByLabelText(/Number of guests/i);
    const dateInput = screen.getByLabelText(/Choose date/i);
    const occasionSelect = screen.getByLabelText(/Occasion/i);
    const timeSelect = screen.getByLabelText(/Choose time/i);
    const submitButton = screen.getByRole("button", {
      name: /Make Your reservation/i,
    });

    fireEvent.change(guestsInput, { target: { value: "2" } });
    fireEvent.change(dateInput, { target: { value: "2024-07-15" } });
    fireEvent.change(occasionSelect, { target: { value: "birthday" } });
    fireEvent.change(timeSelect, { target: { value: "08:00 AM" } });

    expect(submitButton).toBeEnabled();
  });

  test("displays validation error for invalid guests", () => {
    render(
      <BookingForm
        submitReservation={submitReservationMock}
        dispatchTimeslotsOnDateChange={dispatchTimeslotsOnDateChangeMock}
        availableTimeSlots={availableTimeSlots}
      />
    );

    const guestsInput = screen.getByLabelText(/Number of guests/i);
    fireEvent.change(guestsInput, { target: { value: "0" } });

    expect(
      screen.getByText(/Guests can not be null or less than 1/i)
    ).toBeInTheDocument();
  });
});
