import { Outlet, Link, NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Home() {
	return (
		<div>
			<Outlet />
			<br />
			<nav>
				<NavLink
					to={`/`}
					className={({ isActive, isPending }) => (isActive ? "active" : isPending ? "pending" : "")}
				>
					Home
				</NavLink>
				<br />
				<NavLink
					to={`search`}
					className={({ isActive, isPending }) => (isActive ? "active" : isPending ? "pending" : "")}
				>
					search
				</NavLink>
			</nav>
		</div>
	)
}
