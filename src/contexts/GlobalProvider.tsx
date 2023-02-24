import { useReducer, Dispatch, ReactNode } from 'react'

import GlobalContext, { initialState, GlobalStateType, IDetailsCep } from './GlobalContext'

export type GlobalActionType =
  | {
    type: 'setDetailsCep'
    payload: IDetailsCep
  }
  | {
    type: 'setLoading'
    payload: boolean
  }

export type GlobalContextType = {
  state: GlobalStateType
  dispatch: Dispatch<GlobalActionType>
}

const globalContextReducer = (state: GlobalStateType, action: GlobalActionType): GlobalStateType => {
  switch (action.type) {
    case 'setDetailsCep': {
      return {
        ...state,
        detailsCep: action.payload,
        error: '',
      }
    }
    case 'setLoading': {
      return {
        ...state,
        loading: action.payload,
        error: '',
      }
    }
    default:
      return state
  }
}

export const GlobalProvider = (props: { children: ReactNode }): JSX.Element => {
  const [state, dispatch] = useReducer(globalContextReducer, initialState)

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider