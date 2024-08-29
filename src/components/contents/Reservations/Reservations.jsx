import clsx from "clsx";
import { useCallback } from "react";

import { Section } from "../../Section";
import { Button } from "../../Button";
import { useInput } from "../../../hooks";
import { Fieldset } from "./Fieldset";
import { FormLabel } from "./FormLabel";
import { InputErrorMessage } from "./InputErrorMessage";

import "./Reservations.css";

const timeFilters = [
  { id: "lunch", label: "Lunch" },
  { id: "dinner", label: "Dinner" },
];

const lunchTimes = [
  "11:00",
  "11:15",
  "11:30",
  "11:45",
  "12:00",
  "12:15",
  "12:30",
  "12:45",
  "13:00",
  "13:15",
  "13:30",
  "13:45",
];

const dinnerTimes = [
  "17:00",
  "17:15",
  "17:30",
  "17:45",
  "18:00",
  "18:15",
  "18:30",
  "18:45",
  "19:00",
  "19:15",
  "19:30",
  "19:45",
  "20:00",
  "20:15",
  "20:30",
  "20:45",
];

const occasions = [
  { id: "birthday", label: "Birthday" },
  { id: "anniversary", label: "Anniversary" },
  { id: "business", label: "Business" },
  { id: "other", label: "Other" },
];

function handleTargetValue(e) {
  return e.target.value;
}

function handleTargetDataset(e, value = "id") {
  return e.target.dataset[value];
}

const today = new Date().toISOString().split("T")[0];
function validateDate(e) {
  if (e.target.value === "") {
    return "Date is required.";
  }
  if (e.target.value <= today) {
    return "Date cannot be in the past.";
  }
}

function validateTime(e) {
  if (e.target.dataset.id === "") {
    return "Time is required.";
  }
}

const guestMin = 2;
const guestMax = 20;
function validateGuest(e) {
  const value = Number(e.target.value);
  if (value <= 0 || !Number.isSafeInteger(value)) {
    return "Invalid number of guests. It must be a positive integer.";
  }
  if (value <= guestMin) {
    return "The minimum number of guests is 2.";
  }
  if (value >= guestMax) {
    return "The maximum number of guests is 20.";
  }
}

export function Reservations() {
  const date = useInput("", handleTargetValue, validateDate);
  const timeFilter = useInput(timeFilters[0].id, handleTargetDataset);
  const time = useInput("", handleTargetDataset, validateTime);
  const guest = useInput(guestMin, handleTargetValue, validateGuest);
  const occasion = useInput("", handleTargetDataset);
  const note = useInput("", handleTargetValue);

  const timeOptions =
    timeFilter.value === timeFilters[0].id ? lunchTimes : dinnerTimes;
  const validated =
    date.value.length > 0 &&
    date.error.length === 0 &&
    time.value.length > 0 &&
    time.error.length === 0 &&
    Number(guest.value) >= guestMin &&
    Number(guest.value) <= guestMax &&
    guest.error.length === 0;

  const handleSubmit = useCallback(() => {
    console.log(
      { validated },
      date.value,
      time.value,
      guest.value,
      occasion.value,
      note.value,
    );

    console.log("＼(^o^)／ Submit! Go to the next page.");
  }, [
    validated,
    date.value,
    time.value,
    guest.value,
    occasion.value,
    note.value,
  ]);

  return (
    <Section title="Reserve a table">
      <form className="reservation-form">
        <Fieldset legend="Date & Time">
          <FormLabel
            htmlFor="reservation-date"
            required
            className={clsx({ "form-error-label": date.error.length > 0 })}
          >
            Date
          </FormLabel>
          <input
            className={clsx({ "form-error-input": date.error.length > 0 })}
            id="reservation-date"
            type="date"
            required
            autoFocus
            min={today}
            value={date.value}
            onChange={date.setValue}
            onBlur={date.setValue}
          />
          <InputErrorMessage text={date.error} />

          <FormLabel htmlFor="reservation-time" required>
            Time
          </FormLabel>
          <div className="time-filter-options">
            {timeFilters.map(({ id, label }, index) => {
              const active = id === timeFilter.value;
              return (
                <Button
                  key={id}
                  data-id={id}
                  data-index={index}
                  className={clsx("form-time-filter-option", { active })}
                  variant={active ? "secondary" : "normal"}
                  aria-pressed={active}
                  onClick={timeFilter.setValue}
                >
                  {label}
                </Button>
              );
            })}
          </div>
          <ul id="reservation-time" className="form-time-options">
            {timeOptions.map((option) => {
              const active = option === time.value;
              return (
                <li key={option}>
                  <Button
                    className={clsx("form-time-option", { active })}
                    variant={active ? "secondary" : "normal"}
                    aria-pressed={active}
                    data-id={option}
                    onClick={time.setValue}
                  >
                    {option}
                  </Button>
                </li>
              );
            })}
          </ul>
          <InputErrorMessage text={time.error} />
        </Fieldset>

        <Fieldset legend="Number of guests">
          <FormLabel htmlFor="guests" required>
            Guests
          </FormLabel>
          <input
            type="number"
            placeholder="Enter the number of guests"
            min={guestMin}
            max={guestMax}
            id="guests"
            value={guest.value}
            onChange={guest.setValue}
          />
          <InputErrorMessage text={guest.error} />
        </Fieldset>

        <Fieldset legend="Occasion">
          <FormLabel htmlFor="occasion-option">Occasion</FormLabel>
          <ul id="occasion-option" className="form-occasion-options">
            {occasions.map(({ id, label }) => {
              const active = id === occasion.value;
              return (
                <li key={id}>
                  <Button
                    className={clsx("form-occasion-option", { active })}
                    variant={active ? "secondary" : "normal"}
                    aria-pressed={active}
                    data-id={id}
                    onClick={occasion.setValue}
                  >
                    {label}
                  </Button>
                </li>
              );
            })}
          </ul>

          <FormLabel htmlFor="occasion-note">Notes</FormLabel>
          <textarea
            className="form-textarea"
            id="occasion-note"
            rows="3"
            placeholder="Add a special request (optional)"
            value={note.value}
            onChange={note.setValue}
          />
          <InputErrorMessage text={note.error} />
        </Fieldset>

        <Button variant="primary" disabled={!validated} onClick={handleSubmit}>
          Make your reservation
        </Button>
      </form>
    </Section>
  );
}
