const passport = require("passport")
const localStrategy = require("passport-local").Strategy
const UserModel = require("../models/user")
require("dotenv").config()

passport.use(
	"signup",
	new localStrategy(
		{
			usernameField: "username",
			passwordField: "password",
		},
		async (username, password, done) => {
			console.log('holasteozr', username, password)
			try {
				const user = await UserModel.create({ username, password })
				
				return done(null, user)
			} catch (error) {
				done(error)
			}
		}
	)
)

passport.use(
	"login",
	new localStrategy(
		{
			usernameField: "username",
			passwordField: "password",
		},
		async (username, password, done) => {
			
			try {
				const user = await UserModel.findOne({ username })
			
				if (!user) {
					return done(null, false, { message: "User not found" })
				}

				const validate = await user.isValidPassword(password)

				if (!validate) {
					return done(null, false, { message: "Wrong Password" })
				}
				console.log("logincorrecto", username, password)
				return done(null, user, { message: "Logged in Successfully" })
			} catch (error) {
				return done(error)
			}
		}
	)
)

const JWTstrategy = require("passport-jwt").Strategy
const ExtractJWT = require("passport-jwt").ExtractJwt

passport.use(
	new JWTstrategy(
		{
			secretOrKey: process.env.SUPER_SECRET_PASSWORD,
			jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
		},
		async (token, done) => {
			try {
				return done(null, token.user)
			} catch (error) {
				done(error)
			}
		}
	)
)
