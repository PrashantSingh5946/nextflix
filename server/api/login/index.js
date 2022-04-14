var express = require('express');
var login = express.Router();
const jwt = require("jsonwebtoken");  

 // Handling post request
 login.post("/", async (req, res, next) => {
    let { email, password } = req.body;
    
    let existingUser;
    try {
      existingUser = {
          username:email,
          password:password
      };
    } catch {
      const error = new Error("Error! Something went wrong.");
      return next(error);
    }
    if (!existingUser || existingUser.password != "India@123") {
      const error = Error("Wrong details please check at once");
      return next(error);
    }
    let token;
    try {
      //Creating jwt token
      token = jwt.sign(
        { userId: existingUser.id, email: existingUser.email },
        "secretkeyappearshere",
        { expiresIn: "1h" }
      );
    } catch (err) {
      console.log(err);
      const error = new Error("Error! Something went wrong.");
      return next(error);
    }
    
    res
      .status(200)
      .json({
        success: true,
        data: {
          userId: existingUser.id,
          email: existingUser.email,
          token: token,
        },
      });
  });

login.get("/login", async(req,res, next) =>{
    res.send("PLEASE LOGIN");
})

module.exports = login;