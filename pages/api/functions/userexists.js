const mongoose = require("mongoose");
require("dotenv").config();

async function userexists(username) {
  try{
  mongoose.connect(process.env.MONGO_CONNECTION_STRING);
  const User =
    mongoose.models.user ||
    mongoose.model(
      "user",
      mongoose.Schema({
        name: String,
            username: String,
            password: String,
            email: String,
            dob: Date,
      })
    );

  // The query to find all the Lieutenants
  const users = await User.find({ username});
  console.log(users);
  if (users.length != 0) {
    return true;
  } else {
    return false;
  }
}
catch(ex)
{
  console.log(ex);
  console.log("Error ocurred at existsuser");
  return false;
}
}

module.exports = userexists;
