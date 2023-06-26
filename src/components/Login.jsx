import React, { useRef } from "react"
import "../styles/login.css"
import { fetchea } from "../user/signup"
import { fetchLogin } from "../user/login"

const Login = () => {
	const targetRef = useRef(null)
	const signUp = () => {
		targetRef.current.classList.add("right-panel-active")
	}

	const signIn = () => {
		targetRef.current.classList.remove("right-panel-active")
	}


   	
const handula = async (e) => {
		e.preventDefault();
		const username = document.getElementById("email")
		const password = document.getElementById("password")
		
		await fetchea({
			username: username.value,
			
			password: password.value,
		})
	}


const loginFetch = async (e) => {

		e.preventDefault();
		const username = document.getElementById("email2")
		const password = document.getElementById("password2")
		
		await fetchLogin({
			username: username.value,
			password: password.value,
		})
	}
	 


	return (
		<div ref={targetRef} class="container" id="container">
			<div className="container2">
				<div class="form sign_up">
					<form onSubmit={handula}>
						<h1>Create An Account</h1>

						
						<input type="email" placeholder="Email" id="email" />
						<input type="password" placeholder="Password" id="password" />
						<button className="overBtn">Create Account</button>
					</form>
				</div>

				<div class="form sign_in">
					<form onSubmit={loginFetch}>
						<h1>Login In</h1>

						<input type="email" placeholder="Email" id="email2" />
						<input type="password" placeholder="Password" id="password2" />
						<span style={{ marginTop: "16px" }}>
							Forgot your <span class="forgot">password?</span>
						</span>
						<button className="overBtn">Login</button>
					</form>
				</div>
			</div>
			<div class="overlay-container">
				<div class="overlay">
					<div class="overlay-pannel overlay-left">
						<h1>Already have an account</h1>
						<p className="journey">Please Login</p>
						<button onClick={signIn} id="signIn" class="overBtn">
							Sign In
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
	)
}

export default Login
