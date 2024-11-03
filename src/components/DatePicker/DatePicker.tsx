import React from 'react'
import clsx from 'clsx'
import dayjs from 'dayjs'
import Calendar from '@/ui/Icons/Calendar'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import 'dayjs/locale/ru'

const BaseDatePicker = ({ className }: { className: string }) => {
	return (
		<LocalizationProvider
			dateAdapter={AdapterDayjs}
			adapterLocale='ru'
		>
			<DatePicker
				className={clsx(className)}
				format='D.M.YY'
				defaultValue={dayjs(Date.now())}
				slots={{
					openPickerIcon: Calendar,
				}}
				slotProps={{
					textField: {
						sx: {
							'.MuiInputBase-root': {
								width: '160px',
								backgroundColor: 'transparent',
								borderRadius: '4px',
								fontSize: '20px',
								'&::before, &::after': {
									border: 'none',
								},
								'&:hover': {
									backgroundColor: 'white',
									border: 'none',
									'&::before, &::after': {
										border: 'none',
									},
								},
								'&:focus-within': {
									backgroundColor: 'white',
								},
							},
							'.MuiInputBase-input': {
								padding: '0px 2px',
							},
							'.MuiButtonBase-root': {
								padding: '0px 2px',
							},
						},
						size: 'small',
						variant: 'filled',
					},
				}}
			/>
		</LocalizationProvider>
	)
}

export default BaseDatePicker
