import React from 'react'
import styles from './style.module.scss'
import Link from 'next/link'
import { inter } from '@/ui/fonts/fonts'

const Footer = () => {
	return (
		<footer className={`${inter.className} ${styles.footer}`}>
			<span>
				© 2024 Easy Day by{' '}
				<Link href='https://github.com/your-ninja-frontend'>
					ninja-frontend
				</Link>
			</span>
		</footer>
	)
}

export default Footer
