import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.scss'

const figtree = Figtree({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	display: 'swap',
	variable: '--base-font',
	style: 'normal',
	preload: true,
	fallback: ['system-ui', 'arial', 'sans-serif'],
})

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
