const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
// parse application/x-www-form-urlencoded && json
const port = 8000
// const cors = require('cors')
// app.use(cors({ origin: ['http://localhost:/8000'] }))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect('mongodb+srv://hyper:hyper@cluster0.znx2hpk.mongodb.net/').then(() => {
    console.log('MongoDB connected successfully!')
}).catch((err) => {
    console.error("Error Connecting to MongoDB", err)
})

app.listen(port, () => {
    console.log(`Server is running is port `, port)
})

const student = require('./models/students')
const attendance = require('./models/attendance')
//endpoint to register a student
app.post("/addStudent", async (req, res) => {
    try {
        const { studentName, studentId, dateOfBirth, father, mother, phoneNumber, address, mailID } = req.body

        //create new Student
        const newStudent = new student({
            studentId,
            studentName,
            dateOfBirth,
            father,
            mother,
            address,
            phoneNumber,
            mailID
        })
        await newStudent.save()
        res.status(201).json({ message: "Student Registered Successfully." })
    } catch (error) {
        console.log("Error creating student", error)
        res.status(500).json({ message: "Failed to add a Student" })
    }
})

//enpoints to fetch all the employees
app.get('/students', async (req, res) => {
    try {
        const students = await student.find();
        if (!students) return res.status(404).json({ message: 'No Students found' });
        res.status(200).json(students);
    } catch (error) {
        console.log("Error to get student", error)
        res.status(500).json({ message: "Failed to get a Student" })
    }
})