import React, { FC } from 'react'
import styles from './style.module.scss'
import Logo from '@/ui/Logo/Logo'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Logo></Logo>
			<h1 className={styles.title}>Easy Day</h1>
		</header>
	)
}

export default Header
