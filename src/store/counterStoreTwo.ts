import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface ICounter {
  count: number;
  incrementCount: () => void;
  decrementCount: () => void;
  resetCount: () => void;
}

type PersistedCounter = {
  count: number;
};

export const useCountStoreTwo = create<PersistedCounter>(
  persist<ICounter>(
    (set, get) => ({
      count: 0,
      incrementCount: () => {
        const countState = get().count;
        set({ count: countState + 1 });
      },
      decrementCount: () => {
        const countState = get().count;
        set({ count: countState - 1 });
      },
      resetCount: () => {
        set({ count: 0 });
      },
    }),
    {
      name: "count-storage1",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

