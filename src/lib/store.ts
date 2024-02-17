// store.js
import { create } from "zustand";

interface AddItemState {
  active: boolean;
  id: string | null;
  setAddItem: any;
}

const useAddItemStore = create<AddItemState>((set) => ({
  active: false,
  id: null,
  setAddItem: (newValues: Partial<AddItemState>) =>
    set((state) => ({ ...state, ...newValues })),
}));

export default useAddItemStore;
