import React, { useState } from "react"
import slides from '../data/slides'
import '../styles/carrousel.css'

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const handlePreviousSlide = () => {
			setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)
		}

		const handleNextSlide = () => {
			setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)
		}


	return (
		<div className="carousel">
			<div className="slides">
				{slides.map((slide, index) => (
					<div
						className={`slide ${currentSlide === index ? "active" : ""}`}
						key={slide.id}
					>
						<img src={slide.imageUrl} alt={slide.title} />
						<div className="slide-content">
							<h2>{slide.title}</h2>
							<p>{slide.description}</p>
						</div>
					</div>
				))}
			</div>
			<div className="navigation">
				<button onClick={handlePreviousSlide}>Anterior</button>
				<button onClick={handleNextSlide}>Siguiente</button>
			</div>
		</div>
	)
}

export default Carousel
