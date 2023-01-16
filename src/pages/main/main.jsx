import { Outlet } from "react-router-dom"
import { useDispatch } from "react-redux"
import { initCurrentWeather, initForecastWeather } from "../../reducers/weater"
import { useEffect } from "react"
import Menu from "../../components/menu/menu"
import weather from "../../data/weather.json"
import forecast from "../../data/forecast.json"
import "./main.scss"

export default function Main() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(initCurrentWeather(weather))
		dispatch(initForecastWeather(forecast))
	}, [])

	return (
		<div className="main">
			<Outlet />
			<Menu />
		</div>
	)
}
