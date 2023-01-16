export default function IconWeather(props) {
	const dimension = props.size ? `@${props.size}` : ""
	const URL = `https://openweathermap.org/img/wn/${props.code}${dimension}.png`
	return (
		<img
			className="iconWeather"
			src={URL}
			alt="icon weather"
		></img>
	)
}
