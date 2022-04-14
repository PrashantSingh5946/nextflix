const jwt = require("jsonwebtoken");
const finduser = require("./functions/finduser");
const adduser = require("./functions/adduser");

export default async function handler(req, res) {
  if (req.method === "POST") {
    let { username, password } = req.body;
    let flag = false;
    let existingUser;
    try {
      existingUser = {
        username: username,
        password: password,
      };
      flag = await finduser(username, password);
      console.log("Flag is " + flag);
    } catch (ex) {
      const error = new Error("Error! Something went wrong.");
      console.log(ex);
    }

    if (flag) {
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
      }

      res.status(200).json({
        success: true,
        data: {
          userId: existingUser.id,
          email: existingUser.email,
          token: token,
        },
      });
    } else {
      res.status(403).json({
        success: false,
      });
    }
  } else {
    // Handle any other HTTP method
  }
}
