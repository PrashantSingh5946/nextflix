const jwt = require("jsonwebtoken");
const userexists = require("./functions/userexists");
const adduser = require("./functions/adduser");

export default async function handler(req, res) {
  if (req.method === "POST") {
    let user = req.body;
    let flag = true;
    console.log(user);
    try {
      flag = await userexists(user.username);
      console.log("Flag is " + flag);
    } catch (ex) {
      const error = new Error("Error! Something went wrong.");
      console.log(ex);
    }

    if (flag) {
      res.status(400).json({
        success: false,
      });
    } else if (flag === false) {
      let result = await adduser(user);
      res.status(200).json({
        success: true,
        result,
      });
    }
  } else {
    // Handle any other HTTP method
  }
}
