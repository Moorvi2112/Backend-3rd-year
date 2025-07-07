const express = require ("express");
const app = express();
const PORT = 4000;

app.get("/",(req,res)=>{
    res.send("server is live");
})
app.use(express.json()); //middleware to parse JSON bodies
app.post("/",(req,res)=>{
    console.log(req.body);
    res.send("ok");
});
app.listen(PORT,()=>{
    console.log(`Server live on ${PORT}`);
});
