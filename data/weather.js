
async function getWeather (city) {

	if (city == 'toshkent') {
		return await {
			dushanba:	'9 °C',
			seshanba:	'10 °C',
			chorshanba:	'9.5 °C',
			payshanba:	'9.2 °C',
			juma:		'10 °C',
			shanba:		'10.3 °C',
			yakshanba:	'10.5 °C',
		}
	}
	else {
		return null
	}
}

module.exports.getWeather = getWeather