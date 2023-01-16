import { useSelector } from "react-redux"
import IconWeather from "../../components/iconWeather/iconWeather"
import { temperature, humidity, pressure, windSpeed, date } from "../../utils/transform.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDroplet, faGaugeSimple, faWind } from "@fortawesome/free-solid-svg-icons"
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons"
import line from "../../ressources/img/line.svg"
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
							<div className="weather">
								<span>{weather.current.weather[0].main}</span>
							</div>
						</div>
						<div>
							<IconWeather
								code={weather.current.weather[0].icon}
								size="4x"
							/>
						</div>
					</div>
					<div className="meta">
						<div className="humidity">
							<FontAwesomeIcon
								icon={faDroplet}
								color="#8da5c7"
							/>
							<span>{humidity(weather.current.main.humidity)}</span>
						</div>
						<div className="pressure">
							<FontAwesomeIcon
								icon={faGaugeSimple}
								color="#8da5c7"
							/>
							<span>{pressure(weather.current.main.pressure)}</span>
						</div>
						<div className="wind">
							<FontAwesomeIcon
								icon={faWind}
								color="#8da5c7"
							/>
							<span>{windSpeed(weather.current.wind.speed)}</span>
						</div>
					</div>
					<div className="sunsetHour">
						<div className="icon">
							<div className="sunrise">
								<FontAwesomeIcon
									icon={faSun}
									color="#8da5c7"
								/>
								<span>{date(weather.current.sys.sunrise)}</span>
							</div>
							<div className="sunset">
								<FontAwesomeIcon
									icon={faMoon}
									color="#8da5c7"
								/>
								<span>{date(weather.current.sys.sunset)}</span>
							</div>
						</div>
						<img src={line} />
					</div>
					{weather.forecast && (
						<div className="nextWeather">
							<span className="date">Today</span>
							<div className="nextHours">
								{weather.forecast.list.slice(0, 5).map((elem) => {
									return (
										<div
											className="byHours"
											key={elem.dt_txt}
										>
											<div>{date(elem.dt_txt)}</div>
											<IconWeather code={elem.weather[0].icon} />
											<div>{temperature(elem.main.temp)}</div>
										</div>
									)
								})}
							</div>
						</div>
					)}
				</div>
			)}
		</>
	)
}
