import React, { FC } from 'react'
import styles from './style.module.scss'
import Clock from '@/ui/Clock/Clock'
import DateNow from '@/ui/DateNow/DateNow'
import Weather from '@/ui/Weather/Weather'

const Main: FC = () => {
	return (
		<main className={styles.main}>
			<section className={styles.wrapper}>
				<h2 className={styles.title}>Hello, User!</h2>
				<div className={styles.info}>
					<DateNow></DateNow>
					<Clock></Clock>
					{/* <Weather></Weather> */}
				</div>
			</section>
		</main>
	)
}

export default Main
