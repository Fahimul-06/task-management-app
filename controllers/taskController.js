const Task = require('../models/task');
const bcrypt = require('bcrypt');
const sendEmail = require('../utils/sendEmail');
const schedule = require('node-schedule');

// Create Task
exports.createTask = async (req, res) => {
  try {
    const { title, description, priority } = req.body;
    const task = new Task({ title, description, priority, user: req.user.id });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get Tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update Task
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Task
exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Task deleted successfully!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
