const mongoose = require('mongoose');
require('dotenv').config();


async function adduser(user)
{
    try{
        await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
        const User = mongoose.models.user || mongoose.model('user', mongoose.Schema({
            name: String,
            username: String,
            password: String,
            email: String,
            dob: Date,
          }));
          
          let newUser = new User(user);
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