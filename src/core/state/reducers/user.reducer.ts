/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const sliceName = 'user'

/**
 *
 * Types
 *
 */

export type UserType = {
  firstName: string
  lastName: string
}

export type UserState = {
  token: string
  user: UserType
}

/**
 *
 * State
 *
 */

const makeRoot = <T>(val: T) => ({
  [sliceName]: val,
})

export const defaultTheme: UserState = {
  token: '',
  user: {
    firstName: '',
    lastName: '',
  },
}

const initialState: UserState = defaultTheme

const rootInitialState = makeRoot<UserState>(initialState)
type LocalRootState = typeof rootInitialState

/**
 *
 * Selectors
 *
 */

const selectSlice = (state: LocalRootState) => state[sliceName]

export const selectTheme = (state: LocalRootState): UserState =>
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
    setTheme(state: UserState, { payload: theme }: PayloadAction<UserState>) {
      state = theme
    },
    resetTheme() {
      return initialState
    },
  },
})

export const { setTheme, resetTheme } = slice.actions

export default makeRoot(slice.reducer)
