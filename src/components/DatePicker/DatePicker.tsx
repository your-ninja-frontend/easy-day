import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import React from 'react'
import { makeStyles } from '@mui/styles'
import clsx from 'clsx'

const useStyles = makeStyles({
	root: {},
})

const BaseDatePicker = ({ className }: { className: string }) => {
	const classes = useStyles()

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DatePicker
				className={clsx(className, classes.root)}
				slotProps={{
					layout: {
						sx: {
							'.MuiInputBase-root': {
								border: '1px solid red',
							},
						},
					},
				}}
				label='Дата'
			/>
		</LocalizationProvider>
	)
}

export default BaseDatePicker
