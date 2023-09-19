import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import UserList from "./UserList";

jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));

jest.mock("../../utils/API", () => ({
  get: jest.fn(),
}));

describe("UserList component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders loading state initially", async () => {
    render(<UserList />);
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  it("renders error message when API request fails", async () => {
    const errorMessage = "API request failed";
    jest.spyOn(console, "error").mockImplementation(() => {});

    require("../../utils/API").get.mockRejectedValue(new Error(errorMessage));

    render(<UserList />);
    await waitFor(() => {
      expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
    });
  });
});
