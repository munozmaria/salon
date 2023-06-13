import React, { useEffect, useState, useRef } from "react"

import "../styles/Navbar.css"
import Login from "./Login";

const Navbar = () => {

	
	const [menuOpen, setmenuOpen] = useState(false);
	const [loginOpen, setloginOpen] = useState(false);

	
	let menuRef = useRef(null)

	useEffect(() => {
		let handler = (e) => {
			console.log(e.target)
			if (menuRef.current && !menuRef.current.contains(e.target)) {
				setmenuOpen(false)
				
				console.log(menuRef.current)
			}
		}
		document.addEventListener("mousedown", handler)

		return () => {
			document.removeEventListener("mousedown", handler)
		}
	})

   

		return (
			<header>
				<div
					className="login"
					onClick={() => {
						setloginOpen(false)
						setmenuOpen(!menuOpen)
					}}
				>
					Login
				</div>
				<div className={menuOpen ? "open" : "close"}>
					<div
						class="burger"
						title="Open/Close menu"
						onClick={() => {
							setloginOpen(true)
							setmenuOpen(!menuOpen)
						}}
					>
						<div class="line l1"></div>
						<div class="line l2"></div>
						<div class="line l3"></div>
					</div>
					<div id="menu">
						{loginOpen && (
							<>
								<div>
									<div className="wrapper">
										{" "}
										<span class="label-menu">MENU</span>
										<ul ref={menuRef}>
											<li>
												<a class="chakra-link active css-1udx80" href="/">
													<span>
														<div class="text-link">Accueil</div>
													</span>
												</a>
											</li>
											<li>
												<a class="chakra-link css-1udx80" href="/services">
													<span>
														<div class="text-link">Nos services</div>
													</span>
												</a>
											</li>
											<li>
												<a class="chakra-link css-1udx80" href="/a-propos">
													<span>
														<div class="text-link">A propos</div>
													</span>
												</a>
											</li>
										</ul>{" "}
									</div>
									<div class="menu-contact">
										<div class="menu-email">
											<div class="menu-email-label">Contactez nous</div>
											<a class="chakra-link css-iinnqw" role="group">
												<p class="chakra-text css-ondl7t">
													contact@saracoiffeur.fr
												</p>
											</a>
										</div>
										<div class="menu-sub-infos">
											<ul class="menu-social">
												<li>
													<a
														href="https://github.com/"
														target="_blank"
														class="ico-github"
													></a>
												</li>
												<li>
													<a
														href="https://www.linkedin.com/"
														target="_blank"
														class="ico-linkedin"
													></a>
												</li>
												<li>
													<a
														href="https://www.instagram.com/"
														target="_blank"
														class="ico-instagram"
													></a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</>
						)}
						{!loginOpen && <Login />}
					</div>
				</div>
			</header>
		)

}

export default Navbar
