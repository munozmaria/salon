async function fetchea(tokenTTL) {
	const username = document.getElementById("username")
	const password = document.getElementById("password")

	return fetch("/auth/login", {
		method: "post",
		body: new URLSearchParams({
			username: username.value,
			password: password.value,
			tokenTime: tokenTTL,
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			if ("error" in data) return Promise.reject(new Error(data.error))
			localStorage.setItem("token", data.token)
			return Promise.resolve("Login Correcto, redirigiendo...")
		})
}
