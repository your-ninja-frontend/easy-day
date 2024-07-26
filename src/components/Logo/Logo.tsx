import Image from 'next/image'
import React, { FC } from 'react'

const Logo: FC = () => {
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
