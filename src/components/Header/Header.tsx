import React, { FC } from 'react'
import style from './style.module.scss'
import Logo from '@/ui/Logo/Logo'

const Header: FC = () => {
	return (
		<header className={style.header}>
			<Logo></Logo>
			<h1>Easy Day</h1>
		</header>
	)
}

export default Header
