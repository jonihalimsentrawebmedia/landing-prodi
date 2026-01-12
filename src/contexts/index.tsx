'use client'

import React, { Dispatch, useReducer } from 'react'
import { ActionProps, InitialStateProps, StateProps } from '@/contexts/types'
import Reducer, { initialState } from '@/contexts/reducer'

const StateContext = React.createContext<React.ComponentState>([])

export const useStateContext = (): [InitialStateProps, Dispatch<ActionProps>] =>
  React.useContext(StateContext)

const StateProvider: React.FC<StateProps> = ({ children }) => {
  return (
    <StateContext.Provider value={useReducer(Reducer, initialState)}>
      {children}
    </StateContext.Provider>
  )
}

export default StateProvider
