import React, { FC } from 'react'
import styles from './style.module.scss'
import Clock from '@/ui/Clock/Clock'
import DateNow from '@/ui/DateNow/DateNow'
import Weather from '@/ui/Weather/Weather'
import ButtonMain from '@/ui/Buttons/ButtonMain/ButtonMain'

const Main: FC = () => {
	return (
		<main className={styles.main}>
			<div>
				<h2 className={styles.title}>Hello, User!</h2>
				<div className={styles.date}>
					<DateNow></DateNow>
					<Clock></Clock>
					{/* <Weather></Weather> */}
				</div>
			</div>
			<div>
				<ButtonMain>+ Add new List</ButtonMain>
			</div>
		</main>
	)
}

export default Main
