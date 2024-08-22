import clsx from "clsx";

import { Section } from "../../Section";
import { Button } from "../../Button";

import "./Reservations.css";

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

export function Reservations() {
  return (
    <Section title="Reserve a table">
      <form className="reservation-form">
        <Fieldset legend="Date & Time">
          <FormLabel htmlFor="res-date" required>
            Date
          </FormLabel>
          <input type="date" id="res-date" />
          <FormLabel htmlFor="res-time" required>
            Time
          </FormLabel>
          <div className="time-filter-options">
            <Button
              className="meal-option active"
              variant="secondary"
              aria-pressed="true"
            >
              Lunch
            </Button>
            <Button
              className="meal-option"
              variant="normal"
              aria-pressed="false"
            >
              Dinner
            </Button>
          </div>
          <ul id="res-time" className="form-time-options">
            {lunchTimes.map((lunchTime) => (
              <li key={lunchTime.id}>
                <Button className="form-time-option" variant="normal">
                  {lunchTime}
                </Button>
              </li>
            ))}
          </ul>
        </Fieldset>

        <Fieldset legend="Number of guests">
          <FormLabel htmlFor="guests" required>
            Guests
          </FormLabel>
          <input type="number" placeholder="2" min="2" max="20" id="guests" />
        </Fieldset>

        <Fieldset legend="Occation">
          <FormLabel htmlFor="occasion-option">Occasion</FormLabel>
          <ul id="occasion-option" className="form-occasion-options">
            {occasions.map((occasion) => (
              <li key={occasion.id}>
                <Button>{occasion.label}</Button>
              </li>
            ))}
          </ul>

          <FormLabel htmlFor="occasion-note">Notes</FormLabel>
          <textarea
            className="form-textarea"
            id="occasion-note"
            rows="3"
            placeholder="Add a special request (optional)"
          />
        </Fieldset>

        <Button variant="primary">Make your reservation</Button>
      </form>
    </Section>
  );
}

function Fieldset({ legend, className, children }) {
  return (
    <fieldset className={clsx("form-fieldset", className)}>
      <legend className="text-lg text-bold form-legend">{legend}</legend>
      {children}
    </fieldset>
  );
}

function FormLabel({ className, required, children, ...props }) {
  return (
    <label
      className={clsx("form-label", "text-sm", "form-label", className)}
      {...props}
    >
      {children}
      {required && <span className="form-label-required">*</span>}
    </label>
  );
}
