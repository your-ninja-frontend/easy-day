import type { Metadata } from 'next'
import { figtree } from '@/ui/fonts/fonts'
import './globals.scss'

export const metadata: Metadata = {
	title: 'Easy Day',
	description: 'Task planner',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={figtree.className}>{children}</body>
		</html>
	)
}
