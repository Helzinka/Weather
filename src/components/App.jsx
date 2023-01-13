import Header from "./header/header.jsx"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { initWeather } from "../reducers/weater"
import data from "../data/data.json" // data test
import "./App.scss"

function App() {
	const dispatch = useDispatch()
	const weather = useSelector((state) => state.weather.value)

	console.log(weather)

	useEffect(() => {
		dispatch(initWeather(data))
	})

	return (
		<div className="App">
			<Header />
		</div>
	)
}

export default App
