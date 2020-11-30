const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const User = require("./src/backend/model/User")


const cookieExtractor = req=>{
  let token = null;
  if(req && req.cookies){
    token = req.cookies['access_token']
    console.log(token)
  }
  return token;
}

//authorzation
passport.use(new JwtStrategy({
  jwtFromRequest : cookieExtractor,
  secretOrKey : "HarryReigns"
},(payload, done)=>{
    User.findById({_id: payload.sub},(err,user)=>{
      console.log('JWT Enter')
      
      
      if(err){
        
        return done(err,false)
      }
      if(user){
        console.log(user);
        return done(null,user)
      }
      else{
        return done(null, false)
      }
    })
}))



//authenticated local strategy using username and password
passport.use(new LocalStrategy((username, password, done)=>{
  User.findOne({username},(err,user)=>{
    //something went wrong with the database
    if(err){
      return done(err)
    }
    //if no user exists
    if(!user){
      return done(null,false);
    }
    //check if password is correct
    user.comparePassword(password, done);
  });
}));