export default function getGeo(cb: any) {
	if (!navigator.geolocation) {
		cb(undefined)
		console.error(
			'Geolocation не поддерживается вашим браузером. Показана погода для Москвы.',
		)
	} else {
		navigator.geolocation.getCurrentPosition(cb, () => {
			cb(undefined)
			console.error(
				'Невозможно получить Ваше местоположение. Показана погода для Москвы.',
			)
		})
	}
}
