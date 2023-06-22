import React, { useState } from "react"
import "../styles/scrollButton.css"
import { Background } from "react-parallax"

function ScrollToTopButton() {
	const [isVisible, setIsVisible] = useState(false)

	const handleScroll = () => {
		const isTop = window.scrollY === 0
		setIsVisible(!isTop)
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		})
	}

	window.addEventListener("scroll", handleScroll)

	return (
		<button
			className={`scroll-to-top-button ${isVisible ? "" : "hide"}`}
			onClick={scrollToTop}
		>
			Scroll to Top <span style={{ color: "white" }}>⬆</span>
		</button>
	)
}

export default ScrollToTopButton
