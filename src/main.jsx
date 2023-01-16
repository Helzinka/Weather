import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import weather from "./reducers/weater"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faHouse, faFlag, faHeart, faBars } from "@fortawesome/free-solid-svg-icons"
import Main from "./pages/main/main"
import Home from "./pages/home/home"
import Search from "./pages/search/search"
import Liked from "./pages/liked/liked"
import Setting from "./pages/setting/setting"
import ErrorPage from "./pages/404/errorPage"
import "./index.scss"

library.add(faHouse, faFlag, faHeart, faBars)

const store = configureStore({
	reducer: { weather },
})

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
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

			{
				path: "liked",
				element: <Liked />,
			},

			{
				path: "setting",
				element: <Setting />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
)
