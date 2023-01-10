import { PayloadAction } from '@reduxjs/toolkit'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { counterActions } from '../reducer/countSlice'
function* incrementS(payload: PayloadAction<any>) {
	try {
		console.log(payload, 'payload')
	} catch (error) {}
}
function* decrementS(payload: PayloadAction<any>) {
	try {
		console.log(payload, 'payload')
	} catch (error) {}
}

export default function* counterSaga() {
	// yield takeLatest(counterActions.increment.type, incrementS)
	// yield takeLatest(counterActions.decrement.type, decrementS)
}
