import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index'

export interface CounterState {
	countS: number
}

const initialState: CounterState = {
	countS: 0,
}

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state, payload: any) => {
			console.log(payload, 'state.countS')
			state.countS = state.countS + payload.payload
		},
		decrement: (state, payload) => {
			state.countS -= 1
		},
	},
})

//Action
export const counterActions = counterSlice.actions

// Selector
export const counterSelector = (state: RootState) => state.counter.countS

const countReducer = counterSlice.reducer
export default countReducer
