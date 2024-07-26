import React, { ButtonHTMLAttributes } from 'react'
import style from './style.module.scss'
import Image from 'next/image'
import clsx from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	iconPath: string
	alt?: string
}

export const ButtonIcon = ({
	iconPath,
	alt = '',
	className,
	...props
}: ButtonProps) => (
	<button
		className={clsx(style.button, className)}
		type='button'
		{...props}
	>
		<Image
			src={iconPath}
			alt=''
			title={alt}
			width={20}
			height={20}
			className={clsx(style.icon)}
		/>
	</button>
)
