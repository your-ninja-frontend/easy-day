import { ITodo } from '@/types/todos.types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

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
				{ id: uuidv4(), title: 'Stay positive', done: true },
				{ id: uuidv4(), title: 'Deep clean floors.', done: false },
				{ id: uuidv4(), title: 'Wash windows.', done: false },
				{ id: uuidv4(), title: 'Sanitize high-touch areas.', done: false },
				{ id: uuidv4(), title: 'Organize closets.', done: false },
				{ id: uuidv4(), title: 'Stay positive', done: false },
				{ id: uuidv4(), title: 'Dust surfaces.', done: false },
			],
		},
		{
			title: 'Work To-Do',
			todos: [
				{ id: uuidv4(), title: 'Stay positive', done: true },
				{ id: uuidv4(), title: 'Deep clean floors.', done: false },
				{
					id: uuidv4(),
					title: 'Wash windows.',
					done: false,
				},
				{ id: uuidv4(), title: 'Sanitize high-touch areas.', done: false },
				{ id: uuidv4(), title: 'Dust surfaces.', done: false },
			],
		},
		{
			title: 'Workout List',
			todos: [
				{ id: uuidv4(), title: 'Stay positive', done: true },
				{ id: uuidv4(), title: 'Deep clean floors.', done: false },
				{ id: uuidv4(), title: 'Wash windows.', done: false },
				{ id: uuidv4(), title: 'Sanitize high-touch areas.', done: false },
				{ id: uuidv4(), title: 'Organize closets.', done: false },
				{ id: uuidv4(), title: 'Stay positive', done: false },
				{ id: uuidv4(), title: 'Dust surfaces.', done: false },
			],
		},
		{
			title: 'Self-care List',
			todos: [
				{ id: uuidv4(), title: 'Stay positive', done: true },
				{ id: uuidv4(), title: 'Deep clean floors.', done: false },
				{ id: uuidv4(), title: 'Wash windows.', done: false },
				{ id: uuidv4(), title: 'Sanitize high-touch areas.', done: false },
				{ id: uuidv4(), title: 'Organize closets.', done: false },
				{ id: uuidv4(), title: 'Stay positive', done: false },
				{ id: uuidv4(), title: 'Dust surfaces.', done: false },
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
			action: PayloadAction<{ id: string; done: boolean; num: number }>,
		) => {
			const index = state.todoLists[action.payload.num].todos.findIndex(
				todo => todo.id === action.payload.id,
			)
			state.todoLists[action.payload.num].todos[index].done =
				action.payload.done
		},
		removeTodo: (state, action: PayloadAction<{ id: string; num: number }>) => {
			state.todoLists[action.payload.num].todos = state.todoLists[
				action.payload.num
			].todos.filter(el => el.id !== action.payload.id)
		},
		changeListTitle: (
			state,
			action: PayloadAction<{ title: string; num: number }>,
		) => {
			state.todoLists[action.payload.num].title = action.payload.title
		},
		changeTodoTitle: (
			state,
			action: PayloadAction<{ id: string; num: number; title: string }>,
		) => {
			const index = state.todoLists[action.payload.num].todos.findIndex(
				el => el.id === action.payload.id,
			)
			state.todoLists[action.payload.num].todos[index].title =
				action.payload.title
		},
		removeTodoList: (state, action: PayloadAction<{ num: number }>) => {
			state.todoLists.splice(action.payload.num, 1)
		},
		addTodo: (state, action: PayloadAction<{ num: number; value: string }>) => {
			state.todoLists[action.payload.num].todos.push({
				id: uuidv4(),
				title: action.payload.value,
				done: false,
			})
		},
	},
})

export const {
	setTodoStatus,
	removeTodo,
	changeTodoTitle,
	changeListTitle,
	removeTodoList,
	addTodo,
} = rootSlice.actions
export default rootSlice.reducer
