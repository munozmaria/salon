async function fetchLogin({username, password}) {
	

	return fetch("/login", {
		method: "post",
		body: new URLSearchParams({
			username,
			password,
			
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			if ("error" in data) return Promise.reject(new Error(data.error))
			localStorage.setItem("token", data.token)
			return Promise.resolve("Login Correcto, redirigiendo...")
		})
}


module.exports = {fetchLogin}