import type { Metadata } from 'next'
import { figtree } from '@/ui/fonts/fonts'
import './globals.scss'
import { FC } from 'react'

export const metadata: Metadata = {
	title: 'Easy Day',
	description: 'Task planner',
}

const RootLayout: FC<Readonly<ILayoutProps>> = ({ children }) => {
	return (
		<html lang='ru'>
			<body className={figtree.className}>{children}</body>
		</html>
	)
}

export default RootLayout
