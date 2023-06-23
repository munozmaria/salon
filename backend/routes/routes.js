const express = require("express")
const passport = require("passport")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const router = express.Router()

router.post(
	"/signup",
	passport.authenticate("signup", { session: false }),
	async (req, res, next) => {
		res.json({
			message: "Signup successful",
			user: req.user,
		})
	}
)

router.post("/login", async (req, res, next) => {
	console.log("autenticaaaaaaaaaaaaaaaaaa")
	passport.authenticate("login", async (err, user, info) => {
		//console.log('cabesera', req.headers);
		try {
			if (err) {
				console.log("errNo login", err)
				return res.json({ error: "Error en el servidor" })
			} else if (!user) {
				console.log("Mal user", user, info)

				return res.json({ error: "Usuario o Contraseña incorrectos" })
			}

			req.login(user, { session: false }, async (error) => {
				console.log("se errosio2", error)
				if (error) return next(error)
				console.log("cotinua esta")

				const body = { _id: user._id, username: user.username }
				const token = jwt.sign(
					{ user: body },
					process.env.SUPER_SECRET_PASSWORD
				)

				return res.json({ token })
			})
		} catch (error) {
			return next(error)
		}
	})(req, res, next)
})

router.post("/privateroute", function (req, res) {
	const token = req.body.token

	if (token) {
		jwt.verify(token, process.env.SUPER_SECRET_PASSWORD, (err, decoded) => {
			console.log("decoded", decoded)
			if (err === null) {
				res
					.status(200)
					.end(
						`{"success" : "Token Correcto", "status" : 200, "usuario": "${decoded.user.username}", "ok": true}`
					)
				return
			} else
				res.status(401).end('{"success" : false, "status" : 401, "ok": false}')
		})
	} else {
		res.status(404).end('{"success" : false, "status" : 404, "ok": false}')
	}
})
module.exports = router
