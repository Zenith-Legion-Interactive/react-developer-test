import { render, waitFor, screen } from "@testing-library/react";
import UserList from "../components/UserList";
import "jest-fetch-mock";

// Mock the useNavigate function
jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));

describe("UserList", () => {
  it("renders loading state initially", () => {
    render(<UserList />);
    const loadingText = screen.getByText("Loading...");
    expect(loadingText).toBeDefined();
  });

  it("renders user data when fetched successfully", async () => {
    const fakeUserData = [
      {
        id: "1",
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
      },
      // Add more fake user data as needed
    ];

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ data: fakeUserData }),
    });

    render(<UserList />);

    // Wait for the loading state to disappear
    await waitFor(() => {
      const loadingText = screen.queryByText("Loading...");
      expect(loadingText).toBeNull();
    });

    // Check if user data is displayed
    const userName = screen.getByText("Name: John Doe");
    expect(userName).toBeDefined();
  });

  it("renders an error message when fetch fails", async () => {
    const errorMessage = "Network error";

    global.fetch = jest.fn().mockRejectedValueOnce(new Error(errorMessage));

    render(<UserList />);

    // Wait for the loading state to disappear
    await waitFor(() => {
      const loadingText = screen.queryByText("Loading...");
      expect(loadingText).toBeNull();
    });

    // Check if the error message is displayed
    const errorText = screen.getByText(`Error: ${errorMessage}`);
    expect(errorText).toBeDefined();
  });
});

