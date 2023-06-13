import React, { useEffect, useState } from "react"

import "../styles/Navbar.css"

const Navbar = () => {

	
const [menuOpen, setmenuOpen] = useState(false);

   

		return (
			<header>
				<div
					className={menuOpen ? "open" : "close"}
					onClick={() => setmenuOpen(!menuOpen)}
				>
					<div class="login">Login</div>
					<div class="burger" title="Open/Close menu">
						<div class="line l1"></div>
						<div class="line l2"></div>
						<div class="line l3"></div>
					</div>
					<div id="menu">
						<div className="wrapper">
							<span class="label-menu">MENU</span>
							<ul>
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
							</ul>
						</div>
						<div class="menu-contact">
							<div class="menu-email">
								<div class="menu-email-label">Contactez nous</div>
								<a class="chakra-link css-iinnqw" role="group">
									<p class="chakra-text css-ondl7t">contact@saracoiffeur.fr</p>
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
				</div>
			</header>
		)

}

export default Navbar
