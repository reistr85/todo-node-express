
const GetAllTasksService = require('../services/GetAllTasksService');

module.exports = {
  async index(req, res) {

    const tasks = await GetAllTasksService();

    return res.json(tasks);
  }
}