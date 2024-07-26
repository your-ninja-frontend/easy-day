import { ButtonIcon } from '@/ui/Buttons/ButtonIcon/ButtonIcon'
import React, { useState } from 'react'

const TodoTitle = ({ title }: { title: string }) => {
	const [editing, isEditing] = useState(false)

	return (
		<>
			{editing ? (
				<>
					<input type='text' />
					<ButtonIcon
						iconPath='./icon-check.svg'
						alt='Сохранить изменения'
						onClick={() => isEditing(false)}
					></ButtonIcon>
				</>
			) : (
				<>
					<h2>{title}</h2>
					<ButtonIcon
						iconPath='./icon-pencil.svg'
						alt='Изменить заголовок'
						onClick={() => isEditing(true)}
					></ButtonIcon>
				</>
			)}
		</>
	)
}

export default TodoTitle
