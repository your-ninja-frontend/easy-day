import { ITodo } from '@/types/todos.types'
import { ButtonIcon } from '@/ui/Buttons/ButtonIcon/ButtonIcon'
import { InputCheckbox } from '@/ui/Inputs/InputCheckbox/InputCheckbox'
import React, { useState } from 'react'
import style from './style.module.scss'
import { useAppDispatch } from '@/lib/hooks'
import { removeTodo, setTodoStatus } from '@/lib/features/rootSlice'

export const Todo = ({
	todo,
	listNumber,
}: {
	todo: ITodo
	listNumber: number
}) => {
	const [editing, isEditing] = useState(false)
	const dispatch = useAppDispatch()

	return (
		<li className={style.task}>
			{!editing ? (
				<InputCheckbox
					title={todo.title}
					checked={todo.done}
					onChange={() =>
						dispatch(
							setTodoStatus({ id: todo.id, done: !todo.done, num: listNumber }),
						)
					}
					className={style.checkbox}
				/>
			) : (
				<input type='text' />
			)}
			<div className={style.buttons}>
				{!editing ? (
					<>
						<ButtonIcon
							iconPath='./icon-pencil.svg'
							alt='Изменить задачу'
							onClick={() => isEditing(true)}
						/>
					</>
				) : (
					<>
						<ButtonIcon
							iconPath='./icon-check.svg'
							alt='Сохранить изменения'
							onClick={() => isEditing(false)}
						></ButtonIcon>
					</>
				)}

				<ButtonIcon
					iconPath='./icon-delete-task.svg'
					alt='Удалить задачу'
					onClick={() => {
						dispatch(removeTodo({ id: todo.id, num: listNumber }))
					}}
				/>
			</div>
		</li>
	)
}
