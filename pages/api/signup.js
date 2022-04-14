const jwt = require("jsonwebtoken");
const finduser = require("./functions/finduser");
const adduser = require("./functions/adduser");

export default async function handler(req, res) {
  if (req.method === "POST") {
    let user = req.body;
    let flag = true;
    try {
      flag = await finduser(user.username, user.password);
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
