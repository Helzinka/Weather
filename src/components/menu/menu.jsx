import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faFlag, faHeart, faBars } from "@fortawesome/free-solid-svg-icons"
import "./menu.scss"

const menuList = [
	{ href: "/", icon: faHouse },
	{ href: "/search", icon: faFlag },
	{ href: "/liked", icon: faHeart },
	{ href: "/setting", icon: faBars },
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
