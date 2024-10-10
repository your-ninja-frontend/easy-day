import { getRandomNumber } from './getRandomNumber'

const COLORS = ['#FFF6E7', '#E5FFE6', '#F3E4F7', '#EDBBB4']

export const randomColor = () => {
	return COLORS[getRandomNumber(0, COLORS.length)]
}
