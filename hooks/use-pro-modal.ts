import { create } from "zustand";

interface useProModalState {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useProModal = create<useProModalState>((set) => ({
  isOpen: true,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
