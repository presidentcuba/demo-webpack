import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from './rootSaga'
import rootReducer from './rootReducer'

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
	reducer: rootReducer,
	middleware: [sagaMiddleware],
	// middleware: (getDefaultMiddleware) =>
	// 	getDefaultMiddleware({
	// 		thunk: false,
	// 		serializableCheck: false,
	// 		immutableCheck: false,
	// 	}).concat(sagaMiddleware),
	// devTools: process.env.NODE_ENV !== 'production',
})
sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
