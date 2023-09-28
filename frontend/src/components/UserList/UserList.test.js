import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import UserList from "./UserList";

jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));

jest.mock("../../utils/API", () => ({
  get: jest.fn(),
}));

const mockStore = configureStore([]);

describe("UserList component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders loading state initially", () => {
    let store = mockStore({
      users: {
        users: [],
      },
    });
    render(
      <Provider store={store}>
        <UserList />
      </Provider>
    );
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  it("renders list of user", () => {
    let store = mockStore({
      users: {
        users: [
          {
            id: 1,
            email: "user1@example.com",
            firstName: "John",
            lastName: "Doe",
            picture: "user1.jpg",
            phone: "123-456-7890",
          },
        ],
      },
    });
    render(
      <Provider store={store}>
        <UserList />
      </Provider>
    );

    waitFor(() => {
      expect(screen.getByText("John")).toBeInTheDocument();
      expect(screen.getByText("user@example.com")).toBeInTheDocument();
      expect(screen.getByAltText("user.jpg")).toBeInTheDocument();
    });
  });
});
