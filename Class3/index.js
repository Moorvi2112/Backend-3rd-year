const express = require('express');
const app = express();
const PORT = 4000;

// middleware  
app.use((req, res, next) => { 
    console.log("generic Middleware")
    next(); // This calls the next middleware in the stack
}); 


app.use((req, res, next) => { 
    console.log("generic Middleware 2")
    next(); // This calls the next middleware in the stack
}); 

app.get("/user",(req, res) => {
    // console.log(req.query); 
    // console.log(req.query.name); // Accessing the 'name' query parameter 
    // const {name} = req.query; // Destructuring to get 'name' 
    // console.log(name); // This will log the name to the console 
    // DESTRUCTURING QUERY PARAMETERS OF OBJECT
    const {name, number} = req.query; // Destructuring to get 'name' and 'number'
    console.log(name, number); // This will log both name and number to the console
    res.status(200).send("okk");
});

app.get("/user/:id", (req, res) => { 
    // id is dynamic parameter the value of id cann be changed
    // console.log(req.params); // This will log the params it is used to access the id 
    // console.log(req.params);  [Object: null prototype] { id: '199923556' }
    res.status(200).send("okk");
    // DESTRUCTURING PARAMS
    const {id} = req.params; // Destructuring to get 'id'
    console.log(id); // This will log the id to the console which is 199923556
});
    // what is the difference between query-params and params?
    // Query parameters are used to filter or sort data, and they are appended to the URL after a question mark (?)
    // Params are used to identify a specific resource, and they are part of the URL path
    // For example, in the URL /user/199923556?name=John&number=12345
    // '199923556' is a param (req.params.id) and 'name=John&number=12345' are query parameters (req.query.name and req.query.number)

    // In the above example, if you access the URL /user/199923556?name=John&number=12345
    // req.params.id will give you '199923556' and req.query.name will give you 'John' and req.query.number will give you '12345'

app.get("/user/:id/:payment_id", (req, res) => { 
    const {id, payment_id} = req.params; // Destructuring to get 'id' and 'payment_id'
    // console.log(id, payment_id); // This will log both id and payment_id to the console 
   // console.log(id, payment_id); // This will log both id and payment_id to the console
    // id is 199923556 and payment_id is 123456789
    console.log(payment_id);
    res.status(200).send("okk ok");
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// WAHT IS DESTRUCTURING?
// Destructuring is a JavaScript feature that allows you to extract values from arrays or properties 
// from objects into distinct variables. 
// It makes it easier to work with complex data structures by allowing you to unpack values directly 
// into variables, rather than accessing them through their parent object or array.
// In the context of query parameters, destructuring allows you to easily access specific parameters
// without having to repeatedly reference the `req.query` object.



