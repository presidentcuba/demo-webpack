import React from 'react'
import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions, counterSelector } from '../../store/reducer/countSlice'
import './styles.scss'
import styles from './styles.module.scss'
const Login = () => {
	const dispatch = useDispatch()
	const count = useSelector(counterSelector)
	console.log(count, 'count')
	const handleClickUp = () => {
		dispatch(counterActions.increment(5))
	}
	const handleClickDown = () => {
		dispatch(counterActions.decrement(10))
	}
	return (
		<>
			<div className={styles.login_container}>Thông tin đăng nhập</div>
			<Button onClick={handleClickUp}>Click + </Button>
			<Button onClick={handleClickDown}>Click - </Button>
			<div style={{ color: '#fff' }}>{count}</div>
		</>
	)
}
export default Login
