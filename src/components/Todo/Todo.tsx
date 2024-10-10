import { ITodo } from '@/types/todos.types'
import { ButtonIcon } from '@/ui/Buttons/ButtonIcon/ButtonIcon'
import { InputCheckbox } from '@/ui/Inputs/InputCheckbox/InputCheckbox'
import React, { useCallback, useRef, useState } from 'react'
import style from './style.module.scss'
import { useAppDispatch } from '@/lib/hooks'
import {
	changeTodoTitle,
	removeTodo,
	setTodoStatus,
} from '@/lib/features/rootSlice'
import debounce from 'lodash.debounce'

export const Todo = ({
	todo,
	listNumber,
}: {
	todo: ITodo
	listNumber: number
}) => {
	const [editing, isEditing] = useState(false)
	const [value, setValue] = useState(todo.title)
	const inputRef = useRef<HTMLInputElement>(null)
	const dispatch = useAppDispatch()
	const debounceChangeTodo = useCallback(
		debounce(value => {
			dispatch(changeTodoTitle({ title: value, id: todo.id, num: listNumber }))
		}, 300),
		[],
	)

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
				<input
					className={style.changeInput}
					type='text'
					value={value}
					ref={inputRef}
					onChange={e => {
						setValue(e.target.value)
						debounceChangeTodo(e.target.value)
					}}
				/>
			)}
			<div className={style.buttons}>
				{!editing ? (
					<ButtonIcon
						iconPath='./icon-pencil.svg'
						alt='Изменить задачу'
						onClick={() => {
							setValue(todo.title)
							isEditing(true)
							setTimeout(() => inputRef.current?.focus(), 100)
						}}
					/>
				) : (
					<ButtonIcon
						iconPath='./icon-check.svg'
						alt='Сохранить изменения'
						onClick={() => isEditing(false)}
					></ButtonIcon>
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
