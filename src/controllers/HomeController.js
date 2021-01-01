
const GetAllTasksService = require('../services/GetAllTasksService');

var getAllTasksService;

class HomeController {

  constructor(){
    getAllTasksService = new GetAllTasksService();
  }

  async index(req, res) {
    const tasks = await getAllTasksService.execute();

    return res.json(tasks);
  }

}

module.exports = HomeController;