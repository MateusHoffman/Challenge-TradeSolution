import { createContext } from 'react'
import { GlobalContextType } from './GlobalProvider'

export type IDetailsCep = {
  cep: string,
  city: string,
  location: {coordinates: {}, type: string},
  neighborhood: string,
  state: string,
  street: string
}

export type GlobalStateType = {
  detailsCep: IDetailsCep | null
  loading: boolean
  error: string
}

// The initial state
export const initialState: GlobalStateType = {
  detailsCep: null,
  loading: false,
  error: '',
}

// The context
export const GlobalContext = createContext<GlobalContextType>({
  state: initialState,
  dispatch: () => undefined,
})

export default GlobalContext