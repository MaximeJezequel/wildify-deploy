import React from "react"
import { NavLink } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { faStar } from "@fortawesome/free-regular-svg-icons"
import { faUser } from "@fortawesome/free-regular-svg-icons"

import WildifyLogo from "../../assets/wildify-logo-nav.png"

import "./Navbar.css"

const Navbar = () => {
	return (
		<div className="navbar-container">
			<div className="nav-left">
				<NavLink className="nav-button" to="/">
					<img
						className="nav-logo"
						src={WildifyLogo}
						alt="home"
						activeClassName="nav-active"
					/>
					<p className="nav-btn-name">Home</p>
				</NavLink>
			</div>

			<div className="nav-right">
				<NavLink className="nav-button" to="/Explore">
					<FontAwesomeIcon icon={faSearch} />
					<p className="nav-btn-name">Explore</p>
				</NavLink>
				<NavLink className="nav-button" to="/MyLibrary">
					<FontAwesomeIcon icon={faStar} />
					<p className="nav-btn-name">Favorites</p>
				</NavLink>
				<NavLink className="nav-button" to="/UserProfile">
					<FontAwesomeIcon icon={faUser} />
					<p className="nav-btn-name">My Profile</p>
				</NavLink>
			</div>
		</div>
	)
}

export default Navbar
