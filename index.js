const express = require("express");
const app = express();


// app.all("*", (req,res)=>{
//     res.send(`<h1>server run by get method</h1>`)
// });

app.get("/",(req,res)=>{
    console.log("=========>",req.method)
    res.end(`<h1>Express server run by get method</h1>`)
});
app.post("/",(req,res)=>{
    console.log("=========>",req.method)
    res.end(`<h1>Express server run by POST method</h1>`)
});
app.put("/",(req,res)=>{
    console.log("=========>",req.method)
    res.end(`<h1>Express server run by PUT method</h1>`)
});
app.patch("/",(req,res)=>{
    console.log("=========>",req.method)
    res.end(`<h1>Express server run by PATCH method</h1>`)
});
app.delete("/",(req,res)=>{
    console.log("=========>",req.method)
    res.end(`<h1>Express server run by DELETE method</h1>`)
});



app.listen(7000,()=>{
    console.log("express server run success");
});