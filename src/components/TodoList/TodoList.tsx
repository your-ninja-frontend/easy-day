'use client'

import React, { useEffect, useState } from 'react'
import { Todo } from '../Todo/Todo'
import { useAppDispatch } from '@/lib/hooks'
import { ITodo } from '@/types/todos.types'
import style from './style.module.scss'
import TodoTitle from '../TodoTitle/TodoTitle'
import { ButtonIcon } from '@/ui/Buttons/ButtonIcon/ButtonIcon'
import { addTodo, removeTodoList } from '@/lib/features/rootSlice'
import InputText from '@/ui/Inputs/InputText/InputText'
import { randomColor } from '@/utils/randomColor'
import BaseDatePicker from '../DatePicker/DatePicker'

interface TodoListProps {
	todos: ITodo[]
	listId: string
	title: string
}

const TodoList = ({ todos, listId, title }: TodoListProps) => {
	const [color, setColor] = useState('')
	const dispatch = useAppDispatch()

	useEffect(() => {
		const initColor = randomColor()
		setColor(initColor)
	}, [])

	return (
		<li
			className={style.list}
			style={{ backgroundColor: color }}
		>
			<div className={style.wrapper}>
				<TodoTitle
					title={title}
					listId={listId}
				/>
				<ButtonIcon
					className={style.button}
					iconPath='./icon-delete-list.svg'
					alt='Удалить список'
					onClick={() => dispatch(removeTodoList({ listId: listId }))}
				></ButtonIcon>
			</div>
			<BaseDatePicker className={style.date} />
			<ul>
				{todos.map(todo => (
					<Todo
						key={todo.id}
						todo={todo}
						listId={listId}
					></Todo>
				))}
			</ul>
			<InputText
				onKeyDown={e => {
					let target = e.target as HTMLInputElement
					if (e.code === 'Enter' && target.value) {
						dispatch(addTodo({ listId: listId, value: target.value }))
						target.value = ''
					}
				}}
			/>
		</li>
	)
}

export default TodoList
