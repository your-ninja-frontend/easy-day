'use client'

import React, { FC } from 'react'
import styles from './style.module.scss'
import { IButton } from '@/types/buttons.types'

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
