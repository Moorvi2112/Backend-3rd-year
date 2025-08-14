
const express = require("express");
const User = require("../models/user.schema");
const router = express.Router();

router.post('/create', async(req, res) => {
    try{
        const{name,email,age,DOB} = req.body;
        const user=await User.create({
            name:name,
            email:email,
            age:age,
            DOB:new Date(DOB)
        });
        res.status(201).json({user});
    }catch(error){
        res.status(400).json({message: error.message});
    }
});

router.get("/bulk/upload", async (req, res) => {
    try {
        await bulkUserupload();
        res.status(200).json({ message: "Users uploaded successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

});

    router.delete("/:id/delete", async (req, res) => {
    try {
        const {id}=req.params;
        // await User.findByIdAndDelete(id);
        const result = await User.deleteOne({ _id: id });
        res.status(200).json({ message: "Users deleted successfully",result });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;