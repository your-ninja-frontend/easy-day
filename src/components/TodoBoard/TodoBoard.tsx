import React from 'react'
import style from './style.module.scss'
import { useAppSelector } from '@/lib/hooks'
import TodoList from '../TodoList/TodoList'

export const TodoBoard = () => {
	const todoLists = useAppSelector(state => state.rootState.todoLists)

	return (
		<ul className={style.board}>
			{todoLists.map(list => (
				<TodoList
					key={list.listId}
					title={list.title}
					listId={list.listId}
					todos={list.todos}
				></TodoList>
			))}
		</ul>
	)
}
