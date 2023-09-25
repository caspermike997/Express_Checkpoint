const express = require("express");
const app = express();
app.set("view engine","ejs");
app.use(requestTime);




app.get("/",(req,res)=>{
    res.render("HomePage");
});

const userRouter = require("./routes/route");
app.use("/",userRouter);


var currentdate = new Date();


function requestTime(req, res, next){
    console.log(req.originalUrl,currentdate.getDay());
    if((currentdate.getHours()>9) && (currentdate.getHours()<17) && (currentdate.getDay() > 0) && (currentdate.getDay() < 6))
    next();
}

app.listen(4000);








// Checkpoint Objective
// In this checkpoint, we are going to create a web application that contains three pages:

// Home page.
// Our Services.
// Contact us.
// These pages should follow the next requirements: 

// Each page should contain a nav bar link (Home, Our Services, Contact us).
// Feel free to put any content you want.
// The web application is only available during working hours (Monday to Friday,  from 9 to 17).
// Instructions
// Use Express to create the server and handle routes.
// Create a custom middleware to verify the time of the request.
// The pages should be styled with CSS.
// Optionally, you can use any template engine you want.