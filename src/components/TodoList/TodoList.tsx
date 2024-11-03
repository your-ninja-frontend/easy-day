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

const TodoList = ({ list }: { list: TodoListProps }) => {
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
					title={list.title}
					listId={list.listId}
				/>
				<ButtonIcon
					className={style.button}
					iconPath='./icon-delete-list.svg'
					alt='Удалить список'
					onClick={() => dispatch(removeTodoList({ listId: list.listId }))}
				/>
			</div>
			<BaseDatePicker className={style.date} />
			<ul>
				{list.todos.map(todo => (
					<Todo
						key={todo.id}
						todo={todo}
						listId={list.listId}
					/>
				))}
			</ul>
			<InputText
				placeholder='Добавить задачу'
				onKeyDown={e => {
					let target = e.target as HTMLInputElement
					if (e.code === 'Enter' && target.value) {
						dispatch(addTodo({ listId: list.listId, value: target.value }))
						target.value = ''
					}
				}}
			/>
		</li>
	)
}

export default TodoList
