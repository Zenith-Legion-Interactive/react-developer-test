# react-developer-test
React.js Developer Test

Instructions:

- Fork this repository.
- This test is designed to assess the candidate's knowledge and skills in React.js.
- The candidate should complete the tasks and answer the questions to the best of their ability.
- The candidate must write clean and maintainable code.
- Time Limit: 1 week.
- When the candidate is done, candidate must PR their work to master.

Task 1: Setup and Basic Component

- Create a new React application using Create React App or a similar tool.
- Create a functional React component called Counter that displays a number and two buttons: "Increment" and "Decrement." The component should have the following features:
  - The number should start at 0 and be displayed on the screen.
  - Clicking the "Increment" button should increase the number by 1.
  - Clicking the "Decrement" button should decrease the number by 1.
- Display the Counter component in the root component of your application.

Task 2: State Management

- Modify the Counter component to use React state to manage the number.
- Create a new functional component called App that renders two instances of the Counter component. Each instance should have its own independent state.
- Add a "Reset" button to each Counter component that resets its state to 0 when clicked.

Task 3: API Integration

- Fetch and display data from a JSON API using the fetch API or a library like Axios.
- Use https://dummyapi.io/docs with our app-id: 65080fec01538513690ca63e
- Create a new functional component called UserList that fetches a list of users from an external JSON API (e.g., JSONPlaceholder) and displays them in a list.
- Each user should be displayed with their name and email.
- Handle loading and error states appropriately.

Task 4: Routing

- Implement routing in your application using React Router or a similar library.
- Create two separate pages:
  - Page 1: The page should display a list of users using the UserList component from Task 3.
  - Page 2: Create a new page that displays a "Profile" component. The profile page should take a user's ID as a route parameter and display the user's details (name, email, etc.) fetched from the API.

Task 5: Component Composition and Props

- Create a reusable Button component that can be customized with different styles (e.g., primary, secondary, danger).
- Use the Button component in your Counter and Profile components with different styles.

Task 6: Testing

- Write unit tests for the Counter component using a testing library like Jest and React Testing Library.
- Test the increment, decrement, and reset functionality.
- Write unit tests for the UserList component, including testing the data loading and error handling.

Task 7: Bonus (Optional)

- Implement Redux or a state management library of your choice to manage the global state of the application. Refactor your Counter component to use this global state.


