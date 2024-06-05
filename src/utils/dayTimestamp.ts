export const dayTimestamp = (): number => {
	const now = new Date()
	const daytimestamp =
		(now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds()) * 1000
	const diff = 86400000 - daytimestamp
	return diff
}
