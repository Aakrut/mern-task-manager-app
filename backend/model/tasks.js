const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    task_title: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Tasks', taskSchema);