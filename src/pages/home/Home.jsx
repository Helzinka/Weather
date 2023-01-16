import { useSelector } from "react-redux"
import IconWeather from "../../components/iconWeather/iconWeather"
import temperature from "../../utils/transform.js"
import "./home.scss"

export default function Home() {
	const weather = useSelector((state) => state.weather.value)

	return (
		<>
			{weather.current && (
				<div className="home">
					<div className="header">
						<div className="details">
							<span className="cityName">{weather.current.name}</span>
							<span className="temp">{temperature(weather.current.main.temp)}</span>
							<span className="weather">{weather.current.weather[0].main}</span>
						</div>
						<div className="weather">
							<IconWeather
								code={weather.current.weather[0].icon}
								size="4x"
							/>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
