const express = require('express');
const connectDB = require('./db/connectDB');
const app = express();
const PORT = 4000;
require('dotenv').config();
const path = require('path');

const todoRouter = require('./routes/todo.routes'); // routers 


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/todo", todoRouter); // using todo routes


app.get('/', (req, res) => {}); 


connectDB().then(() => {
    app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`);
});
}).catch(error => console.log(error));