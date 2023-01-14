import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import weather from "./reducers/weater"
import { library } from "@fortawesome/fontawesome-svg-core"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Menu from "./pages/menu/Menu"
import Home from "./pages/home/Home"
import Search from "./pages/search/Search"
import ErrorPage from "./pages/404/ErrorPage"
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons"
import "./index.scss"

library.add(faCheckSquare, faCoffee)

const store = configureStore({
	reducer: { weather },
})

const router = createBrowserRouter([
	{
		path: "/",
		element: <Menu />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "search",
				element: <Search />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
)
