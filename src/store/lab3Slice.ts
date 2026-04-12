import { createSlice } from '@reduxjs/toolkit'

export type Lab3State = {
  a: number
  b: number
}

const initialState: Lab3State = {
  a: 0,
  b: 0,
}

const lab3Slice = createSlice({
  name: 'lab3',
  initialState,
  reducers: {
    incrementA(state) {
      state.a += 1
    },
    incrementB(state) {
      state.b += 1
    },
    resetLab3() {
      return initialState
    },
  },
})

export const { incrementA, incrementB, resetLab3 } = lab3Slice.actions
export default lab3Slice.reducer
