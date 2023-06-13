import React from 'react'
import "../styles/login.css"

const Login = () => {
  return (
		<div className="bodyLogin">
			<div class="container" id="container">
				<div class="form sign_up">
					<form action="#">
						<h1>Create An Account</h1>

						<div class="social-container">
							<a href="#">
								<i class="fa-brands fa-facebook"></i>
							</a>
							<a href="#">
								<i class="fa-brands fa-google"></i>
							</a>
							<a href="#">
								<i class="fa-brands fa-github"></i>
							</a>
						</div>
						<span>use email for registration</span>

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
						<span>
							Forgot your <span class="forgot">password?</span>
						</span>
						<button className="overBtn">Login</button>
					</form>
				</div>

				<div class="overlay-container">
					<div class="overlay">
						<div class="overlay-pannel overlay-left">
							<h1>Already have an account</h1>
							<p>Please Login</p>
							<button id="signIn" class="overBtn">
								SignIn
							</button>
						</div>
						<div class="overlay-pannel overlay-right">
							<h1>Create Account</h1>
							<p>Start Your Journey with Us</p>
							<button id="signUp" class="overBtn">
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
