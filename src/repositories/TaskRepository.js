const Task = require('../models/Task');

class TaskRepository{
  findAll(){
    return Task.findAll({
      include: { 
        association: 'user',
        attributes: ['name', 'email'],
      }
    });
  }

  findByPK(id){
    return Task.findByPk(id, {
      include: { 
        association: 'user',
        attributes: ['name', 'email'],
      }
    });
  }
}

module.exports = TaskRepository;