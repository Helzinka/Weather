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

export function date(data) {
	if (typeof data === "string") {
		let date = new Date(data)
		return date.getHours() + ":" + date.getMinutes() + "0"
	}

	let date = new Date(data * 1000)
	return date.getHours() + ":" + date.getMinutes()
}

export default { temperature, humidity, pressure, windSpeed, date }
