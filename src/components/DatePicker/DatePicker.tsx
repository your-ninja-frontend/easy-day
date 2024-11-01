import React from 'react'
import clsx from 'clsx'
import Calendar from '@/ui/Icons/Calendar'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
	root: {},
})

const BaseDatePicker = ({ className }: { className: string }) => {
	const classes = useStyles()

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DatePicker
				className={clsx(className, classes.root)}
				slots={{
					openPickerIcon: Calendar,
				}}
				label='Дата'
			/>
		</LocalizationProvider>
	)
}

export default BaseDatePicker
