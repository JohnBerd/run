import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '../../core/state/store'
import {
  defaultTheme,
  selectTheme,
} from '../../core/state/reducers/theme.reducer'

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useTheme = () => {
  return useAppSelector(selectTheme)
}

export const useDefaultTheme = () => {
  return defaultTheme
}

export const useUser = () => {
  // return user selector
  return null
}
