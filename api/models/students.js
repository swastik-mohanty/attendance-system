const mongoose = require("mongoose");

const student = new mongoose.Schema({
    studentId: {
        type: String,
        required: true,
        unique: true
    },
    studentName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    marks: {
        type: Number,
        required: false,
    },
    attendanceReport: {
        type: Number,
        required: false
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    mailID: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: true
    },
    father: {
        type: String,
        required: false
    },
    mother: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Student = mongoose.model("student-schema", student)

module.exports = Student