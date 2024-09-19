const Student = require('../models/Student');
async function addStudent(req,res){
    try {
        console.log(req.body,`req.body`);
        let student = new Student(req.body);
        await student.save();
        console.log("data added successfully....");
        res.end("Data Added Successfully...")
    } catch (error) {
        console.log(error," Error occured...");
    }
}

const getStudent = async function(req,res){
    try {
        let std = await Student.find({});       //same as Select * from Table_name
        console.log(std);
        res.send(std);
    } catch (error) {
        console.log(error);
    }
}

module.exports ={
    addStudent,
    getStudent
}