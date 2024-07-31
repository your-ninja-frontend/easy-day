'use client'

import React, { InputHTMLAttributes } from 'react'
import styles from './style.module.scss'
import { ITodo } from '@/types/todos.types'
import clsx from 'clsx'

interface InputCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	title: string
}

export const InputCheckbox = ({
	className,
	title,
	...props
}: InputCheckboxProps) => (
	<label className={clsx(styles.checkbox, className)}>
		<input
			className={styles.input}
			type='checkbox'
			{...props}
		/>
		<span className={styles.title}>{title}</span>
	</label>
)
