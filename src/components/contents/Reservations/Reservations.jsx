import clsx from "clsx";
import { useCallback, useMemo, useState } from "react";

import { Section } from "../../Section";
import { Button } from "../../Button";

import "./Reservations.css";
import { useInput } from "../../../hooks";

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

export function Reservations() {
  const today = useMemo(() => new Date().toISOString().split("T")[0], []);
  const validateDate = useCallback(
    (e) => {
      if (e.target.value === "") {
        return "Date is required.";
      }
      if (e.target.value <= today) {
        return "Date cannot be in the past.";
      }
      return "";
    },
    [today],
  );
  const changeDate = useCallback((e) => {
    return e.target.value;
  }, []);
  const date = useInput("", validateDate, changeDate);

  const [timeFilter, setTimeFilter] = useState(timeFilters[0].id);
  const [time, setTime] = useState("");
  const [guest, setGuest] = useState(2);
  const [occasion, setOccasion] = useState("");
  const [note, setNote] = useState("");

  const timeOptions =
    timeFilter === timeFilters[0].id ? lunchTimes : dinnerTimes;

  const onSubmit = useCallback(
    () => console.log("＼(^o^)／ Submit! Go to the next page."),
    [],
  );

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
          {date.error.length > 0 && (
            <p className="text-bold form-error-message" aria-live="assertive">
              {date.error}
            </p>
          )}

          <FormLabel htmlFor="reservation-time" required>
            Time
          </FormLabel>
          <div className="time-filter-options">
            {timeFilters.map(({ id, label }) => {
              const active = timeFilter === id;
              return (
                <Button
                  key={id}
                  data-id={id}
                  className={clsx("form-time-filter-option", { active })}
                  variant={active ? "secondary" : "normal"}
                  aria-pressed={active}
                  onClick={(e) => {
                    console.log("＼(^o^)／", e.target.dataset.id);
                    setTimeFilter(e.target.dataset.id);
                  }}
                >
                  {label}
                </Button>
              );
            })}
          </div>
          <ul id="reservation-time" className="form-time-options">
            {timeOptions.map((option) => {
              const active = time === option;
              return (
                <li key={option}>
                  <Button
                    className={clsx("form-time-option", { active })}
                    variant={active ? "secondary" : "normal"}
                    aria-pressed={active}
                    data-id={option}
                    onClick={(e) => {
                      console.log("＼(^o^)／", e.target.dataset.id);
                      setTime(e.target.dataset.id);
                    }}
                  >
                    {option}
                  </Button>
                </li>
              );
            })}
          </ul>
        </Fieldset>

        <Fieldset legend="Number of guests">
          <FormLabel htmlFor="guests" required>
            Guests
          </FormLabel>
          <input
            type="number"
            placeholder="Enter the number of guests"
            min="2"
            max="20"
            id="guests"
            value={guest}
            onChange={(e) => {
              console.log("＼(^o^)／", e.target.value);
              setGuest(Number(e.target.value));
            }}
          />
        </Fieldset>

        <Fieldset legend="Occasion">
          <FormLabel htmlFor="occasion-option">Occasion</FormLabel>
          <ul id="occasion-option" className="form-occasion-options">
            {occasions.map(({ id, label }) => {
              const active = id === occasion;
              return (
                <li key={id}>
                  <Button
                    className={clsx("form-occasion-option", { active })}
                    variant={active ? "secondary" : "normal"}
                    aria-pressed={active}
                    data-id={id}
                    onClick={(e) => {
                      const { id } = e.target.dataset;
                      console.log("＼(^o^)／", id);
                      setOccasion((prevId) => (prevId === id ? "" : id));
                    }}
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
            value={note}
            onChange={(e) => {
              console.log("＼(^o^)／", e.target.value);
              setNote(e.target.value);
            }}
          />
        </Fieldset>

        <Button variant="primary" onClick={onSubmit}>
          Make your reservation
        </Button>
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
    <label className={clsx("text-bold", "form-label", className)} {...props}>
      {children}
      {required && <span className="form-label-required">*</span>}
    </label>
  );
}
