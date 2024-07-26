'use client'

import React from 'react'
import { Todo } from '../Todo/Todo'
import { useAppDispatch } from '@/lib/hooks'
import { ITodo } from '@/types/todos.types'
import style from './style.module.scss'
import TodoTitle from '../TodoTitle/TodoTitle'

interface TodoListProps {
	todos: ITodo[]
	listNumber: number
	title: string
}

const TodoList = ({ todos, listNumber, title }: TodoListProps) => {
	const dispatch = useAppDispatch()

	return (
		<div className={style.list}>
			<TodoTitle title={title} />
			<ul>
				{todos.map(todo => (
					<Todo
						key={todo.id}
						todo={todo}
						listNumber={listNumber}
					></Todo>
				))}
			</ul>
		</div>
	)
}

export default TodoList
