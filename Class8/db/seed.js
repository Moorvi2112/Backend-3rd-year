//data seeding (to upload data in bulk)
const User = require("../models/user.schema");

const dummyUsers = [
    {
        name:"user 1",
        email:"user1@gmail.com",
        age:18,
        DOB:new Date("2005-01-01")
    },
     {
        name:"user 2",
        email:"user2@gmail.com",
        age:19,
        DOB:new Date("2005-01-01")
    },
     {
        name:"user 3",
        email:"user3@gmail.com",
        age:20,
        DOB:new Date("2005-03-01")
    },
]

async function bulkUserupload(){
    try{
        let users = await User.insertMany(dummyUsers);
        console.log("users uploades to DB");
    }
    catch (error){
        console.log(error.message);
        // throw Error(error.message);
    }
}
module.exports = bulkUserupload;

