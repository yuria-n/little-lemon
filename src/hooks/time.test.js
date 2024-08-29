import { renderHook, act } from "@testing-library/react";

import { fetchAPI } from "../clients";
import { useTime } from "./time";

jest.mock("../clients", () => ({
  fetchAPI: jest.fn(),
}));

describe("useTime Hook", () => {
  const mockDate = new Date();
  const mockType = "lunch";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("initializes with null times", () => {
    const { result } = renderHook(() => useTime());
    expect(result.current.times).toBeNull();
  });

  test("calls fetchAPI and updates times on success", async () => {
    const mockResponse = { times: ["10:00", "12:00"] };
    fetchAPI.mockResolvedValueOnce(mockResponse);
    const { result } = renderHook(() => useTime());
    await act(async () => {
      result.current.getTimes(mockDate, mockType);
    });
    expect(fetchAPI).toHaveBeenCalledWith(mockDate, mockType);
    expect(result.current.times).toEqual(mockResponse);
  });

  test("handles error correctly when fetchAPI rejects", async () => {
    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});
    fetchAPI.mockRejectedValueOnce(new Error("Fetching failed"));
    const { result } = renderHook(() => useTime());
    await act(async () => {
      result.current.getTimes(mockDate, mockType);
    });
    expect(fetchAPI).toHaveBeenCalledWith(mockDate, mockType);
    expect(result.current.times).toBeNull();
    expect(consoleErrorSpy).toHaveBeenCalledWith(expect.any(Error));
    consoleErrorSpy.mockRestore();
  });
});
