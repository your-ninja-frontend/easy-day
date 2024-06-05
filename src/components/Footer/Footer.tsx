import React, { FC } from 'react'
import style from './style.module.scss'
import Link from 'next/link'
import { inter } from '@/ui/fonts/fonts'

const Footer: FC = () => {
	return (
		<footer className={`${inter.className} ${style.footer}`}>
			<span>
				© 2024 Easy Day by{' '}
				<Link href='https://github.com/your-ninja-frontend'>
					your-ninja-frontend
				</Link>
			</span>
		</footer>
	)
}

export default Footer
