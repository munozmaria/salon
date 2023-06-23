async function fetchea({ username, password }) {
    return fetch("/signup", {
        method: "post",
        body: new URLSearchParams({
            username,
        
            password,
            
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data, 'esto es una data')
            if ("error" in data) return Promise.reject(new Error(data.error))
            localStorage.setItem("token", data.token)
            return Promise.resolve("Login Correcto, redirigiendo...")
        })
}

module.exports = {fetchea};