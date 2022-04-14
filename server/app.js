// Importing modules
const express = require("express"); 

const api = require("./api")
  
const app = express();
  
app.use(express.json());

app.use('/api', api);
   
    
  app.listen("3000", () => {
    console.log("Server is listening on port 3000");
  });