import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../utils/API";

// Define an initial state
const initialState = {
  users: [],
  loading: false,
  error: null,
};

// Create an async thunk to fetch user data
export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  try {
    const response = await API.get(`/user`);
    let userPromises;

    if (response.data.data) {
      userPromises = response.data.data.map((user) => {
        return API.get(`/user/${user.id}`);
      });
    }

    const resolvedData = await Promise.allSettled(userPromises);

    const updatedUsers = resolvedData.map((user) => {
      return user.value.data; // Access the value property to get the resolved user data
    });

    return updatedUsers; // Return the updatedUsers directly as the payload
  } catch (error) {
    throw error;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      // Add the new user to the beginning of the users array
      state.users = [action.payload, ...state.users];
    },
    deleteUser: (state, action) => {
      // Find and remove the user from the list based on a unique identifier (e.g., user ID)
      const { userId } = action.payload;
      state.users = state.users.filter((user) => user.id !== userId);
    },
    editUser: (state, action) => {
      const { userId, updatedUserData } = action.payload;

      // Find the user to edit based on user ID
      const userToEdit = state.users.find((user) => user.id === userId);

      if (userToEdit) {
        // Update the user's data with the provided updatedUserData
        Object.assign(userToEdit, updatedUserData);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.error = null;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addUser, deleteUser, editUser } = userSlice.actions;
export default userSlice.reducer;
