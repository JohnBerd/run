/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const sliceName = 'theme'

/**
 *
 * Types
 *
 */

export type ThemeState = {
  backgroundColor: string
}

/**
 *
 * State
 *
 */

const makeRoot = <T>(val: T) => ({
  [sliceName]: val,
})

export const defaultTheme: ThemeState = {
  backgroundColor: '#fff',
}

const initialState: ThemeState = defaultTheme

const rootInitialState = makeRoot<ThemeState>(initialState)
type LocalRootState = typeof rootInitialState

/**
 *
 * Selectors
 *
 */

const selectSlice = (state: LocalRootState) => state[sliceName]

export const selectTheme = (state: LocalRootState): ThemeState =>
  selectSlice(state)

/**
 *
 * Actions
 *
 */

const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setTheme(state: ThemeState, { payload: theme }: PayloadAction<ThemeState>) {
      state = theme
    },
    resetTheme() {
      return initialState
    },
  },
})

export const { setTheme, resetTheme } = slice.actions

export default makeRoot(slice.reducer)
