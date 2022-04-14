const mongoose = require('mongoose');
require('dotenv').config();


async function adduser(username)
{
    try{
        await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
        const User = mongoose.model('user', mongoose.Schema({
            name: String,
            username: String,
            password: String,
          }));
          
          let newUser = new User({name: username});
          await newUser.save();
          mongoose.disconnect();
          return "Successfully created";
    }
    catch(ex)
    {
        return ex;
    }
   
}

module.exports = adduser;