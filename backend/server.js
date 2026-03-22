const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/api/news",(req,res)=>{
res.json([
{
title:"Village Development Scheme",
description:"New rural scheme launched"
}
])
})

app.listen(5000,()=>{
console.log("Server running on port 5000")
})