const Task = require('../models/Task');
const TaskRepository = require('../repositories/TaskRepository');

class GetAllTasksService extends TaskRepository {
  execute(){
    return this.findAll();
  }
}

module.exports = GetAllTasksService;