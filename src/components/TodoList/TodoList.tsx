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

interface TodoListProps {
	todos: ITodo[]
	listNumber: number
	title: string
}

const TodoList = ({ todos, listNumber, title }: TodoListProps) => {
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
					listNumber={listNumber}
				/>
				<ButtonIcon
					className={style.button}
					iconPath='./icon-delete-list.svg'
					alt='Удалить список'
					onClick={() => dispatch(removeTodoList({ num: listNumber }))}
				></ButtonIcon>
			</div>
			<ul>
				{todos.map(todo => (
					<Todo
						key={todo.id}
						todo={todo}
						listNumber={listNumber}
					></Todo>
				))}
			</ul>
			<InputText
				onKeyDown={e => {
					let target = e.target as HTMLInputElement
					if (e.code === 'Enter' && target.value) {
						dispatch(addTodo({ num: listNumber, value: target.value }))
						target.value = ''
					}
				}}
			/>
		</li>
	)
}

export default TodoList
