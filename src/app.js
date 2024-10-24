const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

const signupRoute= require("./routes/signup");
const loginRoute= require("./routes/login");
const franchaiseRoute= require("./routes/franchisee");
const bodyParser= require("body-parser");

const UserModel=require("./models/user");

const userAPI= require("./routes/user");


app.use(bodyParser.json());
app.use(cors());

app.use("/user",userAPI);
app.use("/auth",loginRoute);
app.use("/franchisee", franchaiseRoute);



app.listen(PORT,()=>{
    console.log(`Server is running on : htpp://localhost:${PORT}`);
})

