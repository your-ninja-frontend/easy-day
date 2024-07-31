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
			title: 'Daily To-Do',
			todos: [
				{ id: 0, title: 'Stay positive', done: true },
				{ id: 1, title: 'Deep clean floors.', done: false },
				{ id: 2, title: 'Wash windows.', done: false },
				{ id: 3, title: 'Sanitize high-touch areas.', done: false },
				{ id: 4, title: 'Organize closets.', done: false },
				{ id: 5, title: 'Stay positive', done: false },
				{ id: 6, title: 'Dust surfaces.', done: false },
			],
		},
		{
			title: 'Work To-Do',
			todos: [
				{ id: 0, title: 'Stay positive', done: true },
				{ id: 1, title: 'Deep clean floors.', done: false },
				{
					id: 2,
					title: 'Wash windows.',
					done: false,
				},
				{ id: 3, title: 'Sanitize high-touch areas.', done: false },
				{ id: 4, title: 'Dust surfaces.', done: false },
			],
		},
		{
			title: 'Workout List',
			todos: [
				{ id: 0, title: 'Stay positive', done: true },
				{ id: 1, title: 'Deep clean floors.', done: false },
				{ id: 2, title: 'Wash windows.', done: false },
				{ id: 3, title: 'Sanitize high-touch areas.', done: false },
				{ id: 4, title: 'Organize closets.', done: false },
				{ id: 5, title: 'Stay positive', done: false },
				{ id: 6, title: 'Dust surfaces.', done: false },
			],
		},
		{
			title: 'Self-care List',
			todos: [
				{ id: 0, title: 'Stay positive', done: true },
				{ id: 1, title: 'Deep clean floors.', done: false },
				{ id: 2, title: 'Wash windows.', done: false },
				{ id: 3, title: 'Sanitize high-touch areas.', done: false },
				{ id: 4, title: 'Organize closets.', done: false },
				{ id: 5, title: 'Stay positive', done: false },
				{ id: 6, title: 'Dust surfaces.', done: false },
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
		changeTodoList: (
			state,
			action: PayloadAction<{ title: string; num: number }>,
		) => {
			state.todoLists[action.payload.num].title = action.payload.title
		},
		changeTodoTask: (
			state,
			action: PayloadAction<{ id: number; num: number; title: string }>,
		) => {
			const index = state.todoLists[action.payload.num].todos.findIndex(
				el => el.id === action.payload.id,
			)
			state.todoLists[action.payload.num].todos[index].title =
				action.payload.title
		},
	},
})

export const { setTodoStatus, removeTodo, changeTodoList, changeTodoTask } =
	rootSlice.actions
export default rootSlice.reducer
