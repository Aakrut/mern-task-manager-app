const Tasks = require("../model/tasks");

const getTasks = async (req, res) => {
  try {
    const data = await Tasks.find({});
    res.json({ data });
  } catch (error) {
    console.log(error);
  }
};

const createTask = async (req, res) => {
  try {
    const data = await Tasks.create(req.body);

    res.json({ data });
  } catch (error) {
    console.log(error);
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;

    const data = await Tasks.findById({ _id: taskId });

    res.json({ data });
  } catch (error) {
    console.log(error);
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;

    const data = await Tasks.findByIdAndUpdate({ _id: taskId }, req.body);

    res.json({ data });
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;

    const data = await Tasks.findByIdAndDelete({ _id: taskId });

    res.json({ data });
  } catch (error) {
    console.log(error);
  }
};

const deleteTasks = async (req, res) => {
  try {
    const data = await Tasks.deleteMany();

    res.json({ data });
  } catch (error) {
    console.lohg(error);
  }
};

module.exports = {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  deleteTasks,
};
