
const passport=require("passport")
const {UserModel}=require("./model/user.model");
require("dotenv").config()
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
passport.serializeUser((user, done) => {

	done(null, user.email);
});

passport.deserializeUser(async (email, done) => {
	const user = await UserModel.findOne({ email: email });
	done(null, user);
});
passport.use(
	new GoogleStrategy(
		{
			clientID:"404575401589-l7bt9o0g15d7absejdn6vr0emk2jst00.apps.googleusercontent.com",
			clientSecret:"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",
			callbackURL: "http://localhost:1111/auth/google/callback",
			passReqToCallback: true,
		},
		

		async (request, accessToken, refreshToken, profile, done) => {
			
			done(null, profile);

			const cUser = await UserModel.findOne({ email: profile.email });
	
			if (!cUser) {
				const newUser = {
					email: profile.email,
					name: `${profile.name.givenName} ${profile.name.familyName}`,
					password: profile.id,
				};

			

				const data = await UserModel.create(newUser);
		
				request.body = newUser;
				return done(null, newUser);
			} else {
				request.body = cUser;
			}
		}
	)
);

const googleAuthentication = async (req, res) => {



  const user = req.user


  const frontendURL = "http://localhost:3000/dashboard"

  res.send(`
              <a href="${frontendURL}?userID=${user._id}" id="myid" style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #222222; margin: 0; padding: 0; overflow: scroll;">
                  <img style="width:100%;" src="https://cdn.dribbble.com/users/1787505/screenshots/7300251/media/a351d9e0236c03a539181b95faced9e0.gif" alt="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif">
              </a>
              <script>
                  let a = document.getElementById('myid')
                  setTimeout(()=>{
                      a.click()
                  },2000)
                  console.log(a)
              </script>
      `)

}


  module.exports={passport,googleAuthentication}