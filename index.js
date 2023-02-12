const express=require("express");
const app=express();
const path=require("path");
require("./db/config");
const User = require("./db/User");
const bodyParser = require("body-parser");
app.use(express.json());
const cors=require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get("/",function(req,res){
  // console.log(req);
  res.sendFile(__dirname+"/index.html");
});
app.post("/signup",async(req,res)=>{
  let data = new User(req.body);
  let result = await data.save();
  console.log(result);
  res.sendFile(__dirname+"/index.html");
});
app.post("/login", async (req, res) => {
  let user = await User.findOne(req.body);
if (user) {
  res.sendFile(__dirname+"/home.html");
} else {
  res.send("NO USER FOUND!");
}
});
app.use(express.static(path.join(__dirname, 'public')));
app.listen(100,function(){
  console.log("The server has just started at point 500");
});
