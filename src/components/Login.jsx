import React, { useRef} from "react"
import CryptoJS from "crypto-js"
import "../styles/login.css"


const Login = () => {
	
	

	const secretPass = process.env.REACT_APP_CRYPT_PASS
	console.log(secretPass)

	const encryptData = (password) => {
		const data = CryptoJS.AES.encrypt(
			JSON.stringify(password),
			secretPass
		).toString()

		return data
	}

	const decryptData = (password) => {
		const bytes = CryptoJS.AES.decrypt(password, secretPass)
		const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
		return data
	}

	const targetRef = useRef(null)
	const signUp = () => {
		targetRef.current.classList.add("right-panel-active")
	}

	//signIn
	const signIn = () => {
		targetRef.current.classList.remove("right-panel-active")
	}

	async function fetchea({ username, password }) {
		localStorage.setItem(username, encryptData(password))
	}
	//Login
	async function fetchLogin({ username, password }) {
		const user = localStorage.getItem(username)
		
		if (user === null) {
			console.log("no existe")
		} else if (decryptData(user) === password) {
			console.log("te has logado")
		} else {
			console.log("usuario o contrasena incorecta")
		}
	}

	const handula = async (e) => {
		e.preventDefault()
		const username = document.getElementById("email")
		const password = document.getElementById("password")

		await fetchea({
			username: username.value,

			password: password.value,
		})
	}

	const loginFetch = async (e) => {
		e.preventDefault()
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
