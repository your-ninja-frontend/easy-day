import type { Metadata } from 'next'
import { figtree } from '@/ui/fonts/fonts'
import StoreProvider from './StoreProvider'
import './globals.scss'

export const metadata: Metadata = {
	title: 'Easy Day',
	description: 'Task planner',
}

const RootLayout = ({ children }: ILayoutProps) => {
	return (
		<StoreProvider>
			<html lang='ru'>
				<body className={figtree.className}>{children}</body>
			</html>
		</StoreProvider>
	)
}

export default RootLayout
