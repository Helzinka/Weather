export function temperature(data) {
	return Math.round(data) + " °"
}

export function humidity(data) {
	return data + " %"
}

export function pressure(data) {
	return data + " hPa"
}

export function windSpeed(data) {
	return data + " km/h"
}

export default { temperature, humidity, pressure, windSpeed }
