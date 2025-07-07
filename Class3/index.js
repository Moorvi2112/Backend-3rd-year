const express = require ("express");
const app = express();
const PORT = 4000;

app.get("/user",(req,res)=>{
    // console.log(req.query);
    //  console.log(req.query.name);  //accessing the 'name' query parameter
    const {name}= req.query; // destructuring to get 'name'
    console.log(name);
    res.status(200).send("ok");
})


app.get("/user/:id",(req,res)=>{
    // console.log(req.params);
    const {id}=req.params;
    console.log(id);
    res.status(200).send("ok")

})
app.listen(PORT,()=>{
    console.log(`Server live on ${PORT}`);
});
