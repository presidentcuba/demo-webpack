import { combineReducers } from '@reduxjs/toolkit'
import counter from './reducer/countSlice'
const rootReducer = combineReducers({
	counter: counter,
})
export default rootReducer
