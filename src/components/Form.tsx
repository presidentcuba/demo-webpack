import React, { useId, useEffect, useState, useMemo, useRef, useTransition, useDeferredValue } from 'react'
import { Input } from 'antd'

// flushSunc (() => {}) ? dùng khi muốn state cập nhật ngay lập tức

export default function TestForm({ listUser, user }) {
	const [search, setSearch] = useState('')
	const [count, setCount] = useState(null)
	const [filterText, setFilterText] = useState('')
	const [data, setData] = useState([])
	const [dataRender, setDataRender] = useState([])
	const [isPending, startTransition] = useTransition()
	const timeOutSearch = useRef(null)
	const deferedvalue = useDeferredValue(filterText)

	useEffect(() => {
		if (listUser.length) {
			setData(listUser)
		}
	}, [listUser])

	useEffect(() => {
		const oldData = [...data]
		const newData = oldData.filter((name: any) => {
			if (deferedvalue === '') {
				return name
			} else if (name.toLowerCase().includes(deferedvalue.toLocaleLowerCase())) {
				return name
			}
		})
		setDataRender(newData)
		// startTransition(() => {
		//   setDataRender(newData);
		// });
	}, [deferedvalue, data])

	const handleChangeInput = (e) => {
		setSearch(e.target.value)
		setFilterText(e.target.value)
		// startTransition(() => {
		//   setFilterText(e.target.value);
		// });
		// if (timeOutSearch.current) {
		//   clearTimeout(timeOutSearch.current);
		// }
		// timeOutSearch.current = setTimeout(() => {
		//   setFilterText(e.target.value);
		// }, 500);
	}
	return (
		<div>
			<div>Form</div>
			<div>{count}</div>
			<Input
				name='name'
				value={filterText}
				placeholder='Tìm user'
				onChange={(e) => handleChangeInput(e)}
				style={{ width: 180 }}
			/>

			<hr />
			{/* <div>
		  {isPending ? (
			<p>...loading</p>
		  ) : (
			[...(dataRender || [])].map((name, index) => (
			  <div key={index} style={{ display: "block" }}>
				{name}
			  </div>
			))
		  )}
		</div> */}
			<div>
				{[...(dataRender || [])].map((name, index) => (
					<div key={index} style={{ display: 'block' }}>
						{name}
					</div>
				))}
			</div>
		</div>
	)
}
