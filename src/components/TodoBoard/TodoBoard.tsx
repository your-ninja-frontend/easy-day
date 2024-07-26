import React from 'react'
import style from './style.module.scss'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import TodoList from '../TodoList/TodoList'

export const TodoBoard = () => {
	const todoLists = useAppSelector(state => state.rootState.todoLists)
	const dispatch = useAppDispatch()

	return (
		<div className={style.board}>
			{todoLists.map((list, i) => (
				<TodoList
					key={i}
					title={list.title}
					listNumber={i}
					todos={list.todos}
				></TodoList>
			))}
		</div>
	)
}
