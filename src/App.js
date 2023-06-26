
import './App.css';
import { Parallax } from "react-parallax"

import bg2 from "./images/model.jpg"
import color from './images/yepa.jpg';

import './styles/button.css';
import Navbar from './components/Navbar';






function App() {
  return (
		<div className="App">

		  <Navbar></Navbar>
		  
		  

			<Parallax bgImage={color} strength={500} speed={-10}>
				<div
					style={{
						height: "100vh",
						display: "flex",
						justifyContent: "center",
					  alignItems: "center",
						width: "100vw",
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
						BIEN ETRE COSMETICS
					</h1>
				</div>
			</Parallax>
			<Parallax  strength={500} height={1000} className='paralaxBg'>
			  <div
				  className='parentInfo'
					style={{
						height: "400px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						marginLeft: "50px",
					}}
				>
				  {/*<img
						src={imageModel}
						alt="model"
						style={{
							height: "400px",
							marginLeft: "50px",
							marginRight: "50px",
							objectFit: "cover",
							borderRadius: "5px",
						}}
					/> */}
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
							Decouvrez nos produits haut gamme
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
						<button class="overBtn">Shop</button>
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
					  className='titleServices'
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
