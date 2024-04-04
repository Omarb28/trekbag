import { create } from "zustand";
import { persist } from "zustand/middleware";
import { INITIAL_ITEMS } from "../lib/constants";

export const useItemsStore = create(
  persist(
    (set) => ({
      items: INITIAL_ITEMS,

      addItem: (itemText) => {
        set((state) => {
          const newItem = {
            id: new Date().getTime(),
            name: itemText,
            packed: false,
          };
          const newItems = [...state.items, newItem];

          return { items: newItems };
        });
      },

      removeItem: (id) => {
        set((state) => {
          const newItems = state.items.filter((item) => {
            return item.id !== id;
          });

          return { items: newItems };
        });
      },

      toggleItem: (id) => {
        set((state) => {
          const newItems = state.items.map((item) => {
            if (item.id === id) {
              return { ...item, packed: !item.packed };
            }
            return item;
          });

          return { items: newItems };
        });
      },

      markAllAsComplete: () => {
        set((state) => {
          const newItems = state.items.map((item) => {
            return { ...item, packed: true };
          });
          return { items: newItems };
        });
      },

      markAllAsIncomplete: () => {
        set((state) => {
          const newItems = state.items.map((item) => {
            return { ...item, packed: false };
          });

          return { items: newItems };
        });
      },

      resetAllItems: () => {
        set(() => ({ items: INITIAL_ITEMS }));
      },

      removeAllItems: () => {
        set(() => ({ items: [] }));
      },
    }),
    {
      name: "items",
    }
  )
);
