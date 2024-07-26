import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './style.module.scss'
import clsx from 'clsx'

type ButtonVariant = 'default'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant
	children: ReactNode
}

export const ButtonMain = ({
	children,
	variant = 'default',
	className,
	...props
}: ButtonProps) => (
	<button
		className={clsx(styles.button, styles[variant], className)}
		type='button'
		{...props}
	>
		{children}
	</button>
)
