import renderer from "react-test-renderer";
import axios from "axios";
import {Link} from "react-router-dom";
import Button from "./Button";
import UserList from "./UserList";

jest.mock("axios");
jest.mock("./Button");

const mockUserData = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
  },
];

axios.get.mockResolvedValue({
  data: {
    data: mockUserData,
  },
});

const renderTree = (tree) => renderer.create(tree);

describe("<UserList>", () => {
  it("should render component", () => {
    expect(renderTree(<UserList />).toJSON()).toMatchSnapshot();
  });
});
