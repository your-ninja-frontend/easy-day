'use client'

import React, { FC } from 'react'
import styles from './style.module.scss'

const ButtonMain: FC<IButton> = ({ children, onClick }) => {
	return (
		<button
			onClick={() => onClick()}
			className={styles.button}
		>
			{children}
		</button>
	)
}

export default ButtonMain
