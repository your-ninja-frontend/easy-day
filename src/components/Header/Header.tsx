import React from 'react'
import styles from './style.module.scss'
import Logo from '@/components/Logo/Logo'

const Header = () => {
	return (
		<header className={styles.header}>
			<Logo></Logo>
			<h1 className={styles.title}>Easy Day</h1>
		</header>
	)
}

export default Header
