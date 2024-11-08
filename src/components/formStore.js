import { create } from 'zustand';

const useFormStore = create((set) => ({
  formData: {
    name: '',
    lastname: '',
    email: '',
    password: '',
  },
  setFormData: (newData) =>
    set((state) => ({
      formData: { ...state.formData, ...newData },
    })),
  resetFormData: () =>
    set({
      formData: {
        name: '',
        lastname: '',
        email: '',
        password: '',
      },
    }),
}));

export default useFormStore;
