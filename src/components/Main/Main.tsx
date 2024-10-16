'use client'

import React from 'react'
import styles from './style.module.scss'
import Clock from '@/components/Clock/Clock'
import DateNow from '@/components/DateNow/DateNow'
import Weather from '../Weather/Weather'
import { TodoBoard } from '../TodoBoard/TodoBoard'
import { ButtonMain } from '@/ui/Buttons/ButtonMain/ButtonMain'
import { useAppDispatch } from '@/lib/hooks'
import { addList } from '@/lib/features/rootSlice'

const Main = () => {
	const dispatch = useAppDispatch()

	return (
		<main className={styles.main}>
			<section className={styles.wrapper}>
				<h2 className={styles.title}>Hello, User!</h2>
				<div className={styles.info}>
					<DateNow></DateNow>
					<Clock></Clock>
					<Weather></Weather>
				</div>
			</section>
			<ButtonMain onClick={() => dispatch(addList())}>
				+ Add new List
			</ButtonMain>
			<TodoBoard></TodoBoard>
		</main>
	)
}

export default Main
