const express = require("express");
const aiRouter = require("./routes/ai.routes")

const app = express();

// used for post request in /getReview
app.use(express.json())

//index route or home route
app.get("/", (req,res)=>{
    res.send("test route")
})

app.use("/ai", aiRouter)

module.exports = app;