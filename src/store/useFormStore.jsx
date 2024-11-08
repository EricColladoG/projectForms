import { create } from 'zustand';

export const useFormStore = create((set) => ({
  registros: [], 
  addRegistro: (data) => set((state) => ({ registros: [...state.registros, data] })),
}));
