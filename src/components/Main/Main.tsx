import React, { FC } from 'react'
import style from './style.module.scss'
import Clock from '@/ui/Clock/Clock'
import DateNow from '@/ui/DateNow/DateNow'
import Weather from '@/ui/Weather/Weather'

const Main: FC = () => {
	return (
		<main className={style.main}>
			<div>
				<h2 className={style.title}>Hello, User!</h2>
				<div className={style.date}>
					<DateNow></DateNow>
					<Clock></Clock>
					<Weather></Weather>
				</div>
			</div>
		</main>
	)
}

export default Main
