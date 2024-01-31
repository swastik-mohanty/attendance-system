const mongoose = require("mongoose");

const attendance = new mongoose.Schema({
    studentId: {
        type: String,
        required: true,
        unique: true
    },
    studentName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: String,
        required: true
    }
})

const Attendance = mongoose.model("attendance-schema", attendance)

module.exports = Attendance