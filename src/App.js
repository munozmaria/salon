
import './App.css';
import { Parallax } from "react-parallax"
import bg from './images/bg.jpg';
import bg2 from "./images/bg2.jpg"
import color from './images/color.jpg';
import imageModel from "./images/model2.jpg"
import './styles/button.css';
import Navbar from './components/Navbar';






function App() {
  return (
		<div className="App">

		  <Navbar></Navbar>
		  
		  

			<Parallax bgImage={bg} strength={500} speed={-10}>
				<div
					style={{
						height: "100vh",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
				  <h1
					  className='titleAccueil'
						style={{
							color: "white",
							fontSize: "64px",
							textShadow: "2px 2px 4px #000000",
						}}
					>
						GLAM TO GO
					</h1>
				</div>
			</Parallax>
			<Parallax bgImage={color} strength={500} height={1000}>
			  <div
				  className='parentInfo'
					style={{
						height: "600px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						marginLeft: "50px",
					}}
				>
					<img
						src={imageModel}
						alt="model"
						style={{
							height: "400px",
							marginLeft: "50px",
							marginRight: "50px",
							objectFit: "cover",
							borderRadius: "5px",
						}}
					/>
				  <div
					  className='sonInfo'
						style={{
							display: "flex",
							justifyContent: "center",
							flexDirection: "column",
							alignItems: "center",
							marginRight: "120px",
							textAlign: "start",
						}}
					>
					  <h3
						  className='titleInfo'
							style={{
								color: "white",
								fontSize: "40px",
								textShadow: "2px 2px 4px #000000",
							}}
						>
							Une nouvelle vision du cheveu
						</h3>
						<p
							style={{
								color: "white",
								fontSize: "18px",
								textShadow: "2px 2px 4px #000000",
							}}
						>
							Quel que soit votre cas,
							la façon dont vous racontez votre histoire en ligne peut faire
							toute la différence.
						</p>
						<button class="overBtn">Découvrez l'équipe</button>
					</div>
				</div>
			</Parallax>
			<Parallax bgImage={bg2} strength={500} speed={-10}>
				<div
					id="services"
					style={{
						height: "100vh",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
				  <h1
					  className='titleAccueil'
						style={{
							color: "white",
							fontSize: "64px",
							textShadow: "2px 2px 4px #000000",
						}}
					>
						Nos services
					</h1>
				</div>
			</Parallax>
		</div>
	)
}

export default App;
