import React from 'react'
import clsx from 'clsx'
import Calendar from '@/ui/Icons/Calendar'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import 'dayjs/locale/ru'
import dayjs from 'dayjs'

const BaseDatePicker = ({
	className,
	date,
	onChange,
}: {
	className: string
	date: string
	onChange: (e: dayjs.Dayjs | null) => void
}) => {
	return (
		<LocalizationProvider
			dateAdapter={AdapterDayjs}
			adapterLocale='ru'
		>
			<DatePicker
				className={clsx(className)}
				format='DD.MM.YY'
				value={dayjs(date, 'DD.MM.YY')}
				onChange={onChange}
				slots={{
					openPickerIcon: Calendar,
				}}
				slotProps={{
					openPickerIcon: {
						sx: {
							margin: '0px',
						},
					},
					textField: {
						variant: 'standard',
						sx: {
							'.MuiInputBase-root': {
								width: '160px',
								padding: '0px 14px',
								backgroundColor: 'transparent',
								borderRadius: '4px',
								fontSize: '20px',

								'&::before, &::after': {
									border: 'none',
								},

								'&:hover': {
									backgroundColor: 'white',
								},

								'&:focus-within': {
									backgroundColor: 'white',
								},

								'&.MuiInput-root': {
									'&:hover': {
										'&::before, &::after': {
											border: 'none',
										},
									},
								},
							},

							'.MuiInputBase-input': {
								padding: '0px',
							},
						},
					},
					inputAdornment: {
						position: 'start',
						sx: {
							'.MuiButtonBase-root': {
								padding: '0px 2px',
							},
						},
					},
				}}
			/>
		</LocalizationProvider>
	)
}

export default BaseDatePicker
