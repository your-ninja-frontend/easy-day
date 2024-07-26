import { ITodo } from '@/types/todos.types'
import { ButtonIcon } from '@/ui/Buttons/ButtonIcon/ButtonIcon'
import { InputCheckbox } from '@/ui/Inputs/InputCheckbox/InputCheckbox'
import React from 'react'
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
	const dispatch = useAppDispatch()

	return (
		<li className={style.task}>
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
			<div className={style.buttons}>
				<ButtonIcon
					iconPath='./icon-pencil.svg'
					alt='Изменить задачу'
				/>
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
