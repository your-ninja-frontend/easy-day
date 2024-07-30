import { ITodo } from '@/types/todos.types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface RootState {
	todoLists: {
		title: string
		todos: ITodo[]
	}[]
}

const initialState: RootState = {
	todoLists: [
		{
			title: 'todo1',
			todos: [
				{ id: 0, title: 'Buy milk', done: true },
				{ id: 1, title: 'Eat tacos', done: false },
				{ id: 2, title: 'Brew tea', done: false },
			],
		},
		{
			title: 'todo2',
			todos: [
				{ id: 0, title: '123', done: false },
				{ id: 1, title: '23523s', done: false },
				{
					id: 2,
					title: 'Bg3423523faBg3423523faBg3423523faBg3423523fa',
					done: false,
				},
				{ id: 3, title: 'fewfwegweg', done: false },
			],
		},
	],
}

const rootSlice = createSlice({
	name: 'rootState',
	initialState: initialState,
	reducers: {
		setTodoStatus: (
			state,
			action: PayloadAction<{ id: number; done: boolean; num: number }>,
		) => {
			const index = state.todoLists[action.payload.num].todos.findIndex(
				todo => todo.id === action.payload.id,
			)
			state.todoLists[action.payload.num].todos[index].done =
				action.payload.done
		},
		removeTodo: (state, action: PayloadAction<{ id: number; num: number }>) => {
			state.todoLists[action.payload.num].todos = state.todoLists[
				action.payload.num
			].todos.filter(el => el.id !== action.payload.id)
		},
		changeTitleList: (
			state,
			action: PayloadAction<{ title: string; num: number }>,
		) => {
			state.todoLists[action.payload.num].title = action.payload.title
		},
	},
})

export const { setTodoStatus, removeTodo, changeTitleList } = rootSlice.actions
export default rootSlice.reducer
