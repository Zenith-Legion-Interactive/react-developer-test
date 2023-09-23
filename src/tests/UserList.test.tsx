import { render } from "@testing-library/react";
import UserList from "../Components/UserList";

describe("UserLists", () => {
    it("should render the user list component", async () => {
        const { findByTestId } = render(<UserList />);
        const title = await findByTestId("user-lists-title");

        expect(title.textContent).toBe("User Lists");
    });

    it("should show the loading state if data is being load", async () => {
        const { findByTestId } = render(<UserList />);
        const loading = await findByTestId("loading");

        expect(loading.textContent).toBeTruthy();
    });

    it("should not show the error message if request succeeds", async () => {
        const { queryByTestId } = render(<UserList />);
        const hasError = queryByTestId("has-error");

        expect(hasError).toBeNull();
    });
});
