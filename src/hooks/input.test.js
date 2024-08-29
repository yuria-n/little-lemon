import { renderHook, act } from "@testing-library/react";

import { useInput } from "./input";

describe("useInput Hook", () => {
  const initialValue = "";
  const initialErrorMsg = "";
  const value = "updated value";
  const errorMsg = "The value should be more than 5.";

  test("initializes with default value and no error", () => {
    const mockOnChange = jest.fn((e) => e.target.value);
    const mockValidate = jest.fn((e) =>
      e.target.value.length < 5 ? errorMsg : initialErrorMsg,
    );
    const { result } = renderHook(() =>
      useInput(initialValue, mockOnChange, mockValidate),
    );
    expect(result.current.value).toBe(initialValue);
    expect(result.current.error).toBe(initialErrorMsg);
  });

  test("updates value on change and calls onChange function", () => {
    const mockOnChange = jest.fn((e) => e.target.value);
    const mockValidate = jest.fn((e) =>
      e.target.value.length < 5 ? errorMsg : initialErrorMsg,
    );
    const { result } = renderHook(() =>
      useInput(initialValue, mockOnChange, mockValidate),
    );
    const event = { target: { value } };
    act(() => {
      result.current.setValue(event);
    });
    expect(result.current.value).toBe(value);
    expect(mockOnChange).toHaveBeenCalledWith(event);
  });

  test("sets error when validation fails", () => {
    const mockOnChange = jest.fn((e) => e.target.value);
    const mockValidate = jest.fn((e) =>
      e.target.value.length < 5 ? errorMsg : initialErrorMsg,
    );
    const invalidValue = "no";
    const { result } = renderHook(() =>
      useInput(initialValue, mockOnChange, mockValidate),
    );
    const event = { target: { value: invalidValue } };
    act(() => {
      result.current.setValue(event);
    });
    expect(result.current.error).toBe(errorMsg);
    expect(mockValidate).toHaveBeenCalledWith(event);
  });
});
