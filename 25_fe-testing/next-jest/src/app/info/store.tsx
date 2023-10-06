import { create, } from "zustand";
import { devtools } from 'zustand/middleware'

type State = {
  value: number,
  setValue: () => void
}

export const useStore = create(devtools<State>((set) => ({
  value: 0,
  setValue: () => set((state) => ({ value: state.value + 1 }), false, {
    type: "info/setValue"
  })
}), { name: "state-info" }))