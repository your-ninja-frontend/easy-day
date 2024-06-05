import Image from 'next/image'
import React from 'react'

const Logo = () => {
	return (
		<Image
			src='./logo.svg'
			alt='Logo'
			width={30}
			height={30}
		></Image>
	)
}

export default Logo
