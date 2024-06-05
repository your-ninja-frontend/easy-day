'use client'

import { dayTimestamp } from '@/utils/dayTimestamp'
import React, { FC, useEffect, useState } from 'react'

const formatter: Intl.DateTimeFormatOptions = {
	weekday: 'short',
	month: 'long',
	day: 'numeric',
}

const DateNow: FC = () => {
	const [date, setDate] = useState(
		new Intl.DateTimeFormat('ru', formatter).format(new Date()),
	)

	const diff = dayTimestamp()

	useEffect(() => {
		const i = setInterval(() => {
			setDate(new Intl.DateTimeFormat('ru', formatter).format(new Date()))
		}, diff)
		return () => {
			clearInterval(i)
		}
	}, [diff])

	return <div>{date}</div>
}

export default DateNow
