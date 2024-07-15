import express from 'express';
const server=express();
server.get("/",(req,res)=>{
    res.send("<h1>Welcome</h1>");
})
const port=8000
server.listen(port,()=>{
    console.log("server listening on port"+port);
    
})