import { Outlet } from "react-router-dom"
import Menu from "../../components/menu/menu"
import "./main.scss"

export default function Home() {
	return (
		<div className="main">
			<Outlet />
			<Menu />
		</div>
	)
}
