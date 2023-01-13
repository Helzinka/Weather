import React from "react"
import ReactDOM from "react-dom/client"
import App from "./components/App.jsx"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import weather from "./reducers/weater"
import "./index.scss"

const store = configureStore({
	reducer: { weather },
})

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<App />
	</Provider>
)
