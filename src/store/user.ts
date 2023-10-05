import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { User } from "../types/User";
import helpers from "../helpers";
import axiosInstance from "../helpers/axiosInstance";

interface Users {
  isLoading: boolean;
  list: User[];
  error?: string;
}

export interface UserData {
  isLoading?: boolean;
  error?: string;
  data?: User;
}

interface UserState {
  users: Users;
  userData: Record<string, UserData>;
}

interface UserActions {
  fetchUsers: (params: { forceError?: boolean }) => Promise<void>;
  fetchUser: (id: string) => Promise<void>;
}

export const useUser = create<UserState & UserActions>()(
  devtools(
    persist(
      (set, get) => ({
        users: { isLoading: false as boolean, list: [] as User[] },
        userData: {},
        fetchUser: async (id) => {
          const updateUserData = (data: UserData) => {
            set((state) => ({
              userData: {
                ...state.userData,
                [id]: { ...((state.userData || {})[id] || {}), ...data },
              },
            }));
          };
          updateUserData({ isLoading: true });
          updateUserData({ error: undefined });
          try {
            const { data } = await axiosInstance(`/user/${id}`);
            updateUserData({ data });
          } catch (err) {
            updateUserData({ error: helpers.errorMessage(err) });
          }
          updateUserData({ isLoading: false });
        },
        fetchUsers: async ({ forceError }) => {
          const { users } = get();
          if (users.isLoading) {
            return;
          }
          set((state) => ({ users: { ...state.users, isLoading: true } }));
          set((state) => ({ users: { ...state.users, error: undefined } }));
          try {
            const { data } = await axiosInstance(
              "/user" + (forceError ? "test-error" : "")
            );
            set((state) => ({ users: { ...state.users, list: data.data } }));
          } catch (err) {
            set((state) => ({
              users: { ...state.users, error: helpers.errorMessage(err) },
            }));
          }
          set((state) => ({ users: { ...state.users, isLoading: false } }));
        },
      }),
      { name: "user-storage" }
    )
  )
);
