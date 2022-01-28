const express = require('express');

const router = express.Router();
const {getTasks, createTask, getTask, updateTask, deleteTask, deleteTasks}  = require('../controller/tasks')

router.route('/').get(getTasks).post(createTask).delete(deleteTasks)

router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router;