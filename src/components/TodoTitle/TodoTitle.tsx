import { useAppDispatch } from '@/lib/hooks'
import { ButtonIcon } from '@/ui/Buttons/ButtonIcon/ButtonIcon'
import React, { useCallback, useRef, useState } from 'react'
import style from './style.module.scss'
import { changeListTitle } from '@/lib/features/rootSlice'
import debounce from 'lodash.debounce'

const TodoTitle = ({
	title,
	listNumber,
}: {
	title: string
	listNumber: number
}) => {
	const [editing, isEditing] = useState(false)
	const [value, setValue] = useState(title)
	const dispatch = useAppDispatch()
	const inputRef = useRef<HTMLInputElement>(null)
	const debounceChangeTitle = useCallback(
		debounce(value => {
			dispatch(changeListTitle({ title: value, num: listNumber }))
		}, 300),
		[],
	)

	return (
		<div className={style.wrapper}>
			{editing ? (
				<>
					<input
						className={style.input}
						type='text'
						ref={inputRef}
						value={value}
						onChange={e => {
							setValue(e.target.value)
							debounceChangeTitle(e.target.value)
						}}
					/>
					<ButtonIcon
						iconPath='./icon-check.svg'
						alt='Сохранить изменения'
						onClick={() => isEditing(false)}
					></ButtonIcon>
				</>
			) : (
				<>
					<h2 className={style.title}>{title}</h2>
					<ButtonIcon
						iconPath='./icon-pencil.svg'
						alt='Изменить заголовок'
						onClick={() => {
							setValue(title)
							isEditing(true)
							setTimeout(() => inputRef.current?.focus(), 100)
						}}
					></ButtonIcon>
				</>
			)}
		</div>
	)
}

export default TodoTitle
