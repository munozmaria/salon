import React from 'react'
import "../styles/login.css"

const Login = () => {

	const container = document.getElementById("container")

	const signUp = () => {
		const signUpBUtton = document.getElementById("signUp")
		
	

		signUpBUtton.addEventListener("click", () => {
			container.classList.add("right-panel-active")
		})

	
	}

	const signIn = () => {
		const signInBUtton = document.getElementById("signIn")
			signInBUtton.addEventListener("click", () => [
				container.classList.remove("right-panel-active"),
			])
	 }


  return (
		<div className="bodyLogin">
			<div class="container" id="container">
				<div class="form sign_up">
					<form action="#">
						<h1>Create An Account</h1>

						<input type="text" placeholder="User Name" />
						<input type="email" placeholder="Email" />
						<input type="password" placeholder="Password" />
						<button className="overBtn">Create Account</button>
					</form>
				</div>

				<div class="form sign_in">
					<form action="#">
						<h1>Login In</h1>

						<input type="email" placeholder="Email" />
						<input type="password" placeholder="Password" />
						<span style={{ marginTop: "16px" }}>
							Forgot your <span class="forgot">password?</span>
						</span>
						<button className="overBtn">Login</button>
					</form>
				</div>

				<div class="overlay-container">
					<div class="overlay">
						<div class="overlay-pannel overlay-left">
							<h1>Already have an account</h1>
							<p className="journey">Please Login</p>
							<button onClick={signIn} id="signIn" class="overBtn">
								SignIn
							</button>
						</div>
						<div class="overlay-pannel overlay-right">
							<h1>Create Account</h1>
							<p className="journey">Start Your Journey with Us</p>
							<button onClick={signUp} id="signUp" class="overBtn">
								Sign Up
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
