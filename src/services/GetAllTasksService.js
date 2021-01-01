const Task = require('../models/Task');

const execute = () => {
  
  const tasks = Task.findAll({
    include: { 
      association: 'user',
      attributes: ['name', 'email'],
    }
  });

  return tasks;
}

module.exports = execute;