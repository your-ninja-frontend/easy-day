import dayjs from 'dayjs'
import { ITodo } from '@/types/todos.types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export interface TodoList {
	listId: string
	title: string
	todos: ITodo[]
	date: string
}

type RootState = { todoLists: TodoList[] }

const initialState: RootState = {
	todoLists: [
		{
			listId: uuidv4(),
			title: 'Daily To-Do',
			date: dayjs().format('DD.MM.YY'),
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
			listId: uuidv4(),
			title: 'Work To-Do',
			date: dayjs().format('DD.MM.YY'),
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
			listId: uuidv4(),
			title: 'Workout List',
			date: dayjs().format('DD.MM.YY'),
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
			listId: uuidv4(),
			title: 'Self-care List',
			date: dayjs().format('DD.MM.YY'),
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

const findIndex = (
	state: RootState,
	action: PayloadAction<{ id?: string; done?: boolean; listId?: string }>,
) => state.todoLists.findIndex(list => list.listId === action.payload.listId)

const rootSlice = createSlice({
	name: 'rootState',
	initialState: initialState,
	reducers: {
		setTodoStatus: (
			state,
			action: PayloadAction<{ id: string; done: boolean; listId: string }>,
		) => {
			const indexList = findIndex(state, action)
			const indexTodo = state.todoLists[indexList].todos.findIndex(
				todo => todo.id === action.payload.id,
			)
			state.todoLists[indexList].todos[indexTodo].done = action.payload.done
		},
		removeTodo: (
			state,
			action: PayloadAction<{ id: string; listId: string }>,
		) => {
			const indexList = findIndex(state, action)
			state.todoLists[indexList].todos = state.todoLists[
				indexList
			].todos.filter(todo => todo.id !== action.payload.id)
		},
		changeListTitle: (
			state,
			action: PayloadAction<{ title: string; listId: string }>,
		) => {
			const indexList = findIndex(state, action)
			state.todoLists[indexList].title = action.payload.title
		},
		changeTodoTitle: (
			state,
			action: PayloadAction<{ id: string; listId: string; title: string }>,
		) => {
			const indexList = findIndex(state, action)
			const indexTodo = state.todoLists[indexList].todos.findIndex(
				todo => todo.id === action.payload.id,
			)
			state.todoLists[indexList].todos[indexTodo].title = action.payload.title
		},
		removeTodoList: (state, action: PayloadAction<{ listId: string }>) => {
			const indexList = findIndex(state, action)
			state.todoLists.splice(indexList, 1)
		},
		addTodo: (
			state,
			action: PayloadAction<{ listId: string; value: string }>,
		) => {
			const indexList = findIndex(state, action)
			state.todoLists[indexList].todos.push({
				id: uuidv4(),
				title: action.payload.value,
				done: false,
			})
		},
		addList: state => {
			state.todoLists.push({
				listId: uuidv4(),
				title: 'Добавить заголовок',
				date: dayjs().format('DD.MM.YY'),
				todos: [],
			})
		},
		changeDate: (
			state,
			action: PayloadAction<{ listId: string; date: string }>,
		) => {
			const indexList = findIndex(state, action)
			state.todoLists[indexList].date = action.payload.date
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
	addList,
	changeDate,
} = rootSlice.actions
export default rootSlice.reducer
