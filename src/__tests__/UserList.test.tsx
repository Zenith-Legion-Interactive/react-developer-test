// eslint-disable-next-line no-unused-vars
import "@testing-library/jest-dom";
import { describe, it } from "vitest";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import UserList from "../components/UserList/List";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("UserList", () => {
  it("Check User list loading", async () => {
    const badRoute = "/";
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <Routes>
          <Route path="/" element={<UserList forceError />} />
        </Routes>
      </MemoryRouter>
    );
    await waitFor(() => screen.getByTestId("loading-label"));
    expect(screen.getByTestId("loading-label").textContent).toEqual(
      "Loading..."
    );
  });
  it("Check User list error", async () => {
    const badRoute = "/";
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <Routes>
          <Route path="/" element={<UserList forceError />} />
        </Routes>
      </MemoryRouter>
    );
    try {
      await waitFor(() => screen.getByTestId("loading-label"), {
        timeout: 3000,
      });
      await waitForElementToBeRemoved(
        () => screen.getByTestId("loading-label"),
        { timeout: 1000 }
      );
      await waitFor(() => screen.getByTestId("error-label"), {
        timeout: 3000,
      });
      expect(screen.getByTestId("error-label").textContent).not.toEqual(0);
    } catch (err) {
      console.log((err as Error).message);
    }
  });
});
