import { renderHook, act } from "@testing-library/react";

import { submitAPI } from "../clients";
import { useSubmit } from "./submit";

jest.mock("../clients", () => ({
  submitAPI: jest.fn(),
}));

describe("useSubmit Hook", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("initializes with null result", () => {
    const { result } = renderHook(() => useSubmit());
    expect(result.current[0]).toBeNull();
  });

  test("calls submitAPI and updates result on success", async () => {
    const mockData = { test: "data" };
    const mockResponse = { success: true };
    submitAPI.mockResolvedValueOnce(mockResponse);
    const { result } = renderHook(() => useSubmit());
    await act(async () => {
      result.current[1](mockData);
    });
    expect(submitAPI).toHaveBeenCalledWith(mockData);
    expect(result.current[0]).toEqual(mockResponse);
  });

  test("handles error correctly when submitAPI rejects", async () => {
    const mockData = { test: "data" };
    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});
    submitAPI.mockRejectedValueOnce(new Error("Submission failed"));
    const { result } = renderHook(() => useSubmit());
    await act(async () => {
      result.current[1](mockData);
    });
    expect(submitAPI).toHaveBeenCalledWith(mockData);
    expect(result.current[0]).toBeNull();
    expect(consoleErrorSpy).toHaveBeenCalledWith(expect.any(Error));
    consoleErrorSpy.mockRestore();
  });
});
