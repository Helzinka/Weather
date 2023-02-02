import { useSelector } from "react-redux"
import IconWeather from "../../components/iconWeather/iconWeather"
import { temperature, humidity, pressure, windSpeed, date } from "../../utils/transform.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDroplet, faGaugeSimple, faWind } from "@fortawesome/free-solid-svg-icons"
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons"
import line from "../../ressources/img/line.svg"
import { DateTime } from "luxon"
import "./home.scss"

export default function Home() {
	const NB_TIME_HOURS = 5
	const NB_NEXT_DAYS = 3
	const weather = useSelector((state) => state.weather.value)

	if (!weather.current) {
		return <p>"loading data"</p>
	}

	const getMinMaxTemp = (date, day = 1) => {
		let currDate = DateTime.fromSeconds(date).plus({ days: day })

		let min = weather.forecast.list.reduce((acc, next) => {
			let end = DateTime.fromSeconds(next.dt)
			let same = end.hasSame(currDate, "days")

			if (same) {
				return [...acc, next.dt]
			}
			return acc
		}, [])

		console.log(min)

		// return { min: temperature(Math.min(...min)), max: temperature(Math.max(...min)) }
	}
	getMinMaxTemp(weather.forecast.list[0].dt)

	return (
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
			<div className="nextWeather">
				<span className="date">Today</span>
				<div className="nextHours">
					{weather.forecast.list.slice(0, NB_TIME_HOURS).map((elem) => {
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
			<div className="nextWeeklyWeather">
				{/* {[...Array(1)].map((_, i) => {
					return (
						<div
							key={i}
							className="byDay"
						>
							<div></div>
							<div className="minMax">
								<div>{getMinMaxTemp(weather.forecast.list[0].dt, i + 1).min}</div>
								<div>{getMinMaxTemp(weather.forecast.list[0].dt, i + 1).max}</div>
							</div>
						</div>
					)
				})} */}
			</div>
		</div>
	)
}
