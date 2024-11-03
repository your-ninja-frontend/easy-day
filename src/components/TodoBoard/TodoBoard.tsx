import React from 'react'
import style from './style.module.scss'
import { useAppSelector } from '@/lib/hooks'
import TodoList from '../TodoList/TodoList'

export const TodoBoard = () => {
	const todoLists = useAppSelector(state => state.rootState.todoLists)

	return (
		<ul className={style.board}>
			{todoLists.map(todoList => (
				<TodoList
					key={todoList.listId}
					list={todoList}
				/>
			))}
		</ul>
	)
}
