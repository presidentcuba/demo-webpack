import React, { useState, useEffect, Suspense, useTransition } from 'react'
import TestForm from './components/Form'
import Login from './pages/Login'

import { Spin } from 'antd'

const App = () => {
	const [listUser, setListUser] = useState([])
	const [isPending, startTransition] = useTransition()
	const [isTest, setIsTest] = useState(false)
	const [isCheck, setIsCheck] = useState(false)
	useEffect(() => {
		startTransition(() => {
			// setListUser([...Array(20000)].map((_, index) => `Username ${index}${index} `))
		})
	}, [])

	return (
		<>
			<Login />
			{/* <TestForm listUser={listUser} user={[]} /> */}
			{/* <InputCommon
        onChange={handleChangeValue}
        backgrounds={{ values: "#000" }}
        type="search"
        style={{ width: 250 }}
        placeholder="Nhập từ khoá"
      /> */}
		</>
	)
}
export default App
