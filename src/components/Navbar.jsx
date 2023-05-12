import React, { useEffect, useState } from "react"
import logo from "../images/logo.png"
import "../styles/Navbar.css"

const Navbar = () => {

    const [navbarColor, setNavbarColor] = useState("transparent")
     const [navbarHeigth, setNavbarHeigth] = useState("50px")
    const [showLogo, setShowLogo] = useState(false)
     const [isScrolled, setIsScrolled] = useState(false)

		const listenScrollEvent = (event) => {
			if (window.scrollY > 50) {
                setNavbarColor("white")
                setNavbarHeigth('67px')
                setIsScrolled(true)
                setShowLogo(true)
			} else {
                setNavbarColor("transparent")
                setNavbarHeigth("50px")
                setShowLogo(false)
                setIsScrolled(false)
			}
		}

		useEffect(() => {
            window.addEventListener("scroll", listenScrollEvent)
            
			return () => window.removeEventListener("scroll", listenScrollEvent)
		}, [])

		return (
			<header>
				<nav
					style={{ backgroundColor: navbarColor, height: navbarHeigth }}
					className="navbar"
				>
					<div className={`logo ${showLogo ? "visible" : ""}`}>
						<img src={logo} alt="Logo" />
					</div>
					<ul>
						<li>
							<a style={{ color: isScrolled ? "black" : "white" }} href="/">
								Services
							</a>
						</li>
						<li>
							<a style={{ color: isScrolled ? "black" : "white" }} href="/">
								Equipe
							</a>
						</li>
						<li>
							<a style={{ color: isScrolled ? "black" : "white" }} href="/">
								Reservation
							</a>
						</li>
					</ul>
				</nav>
			</header>
		)

}

export default Navbar
