import { configureStore } from '@reduxjs/toolkit'
import lab3Reducer from './lab3Slice'

export const createLabStore = () =>
  configureStore({
    reducer: {
      lab3: lab3Reducer,
    },
  })

export type LabRootState = ReturnType<ReturnType<typeof createLabStore>['getState']>
export type LabDispatch = ReturnType<typeof createLabStore>['dispatch']
