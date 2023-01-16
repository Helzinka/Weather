import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./menu.scss"

const menuList = [
	{ href: "/", icon: "house" },
	{ href: "/search", icon: "flag" },
	{ href: "/liked", icon: "heart" },
	{ href: "/setting", icon: "bars" },
]

export default function Menu() {
	return (
		<nav className="menu">
			{menuList.map((elem) => {
				return (
					<NavLink
						key={elem.href}
						to={elem.href}
						className={({ isActive }) => (isActive ? "active" : "inactive")}
					>
						<FontAwesomeIcon icon={elem.icon} />
					</NavLink>
				)
			})}
		</nav>
	)
}
