const express = require('express');
const DebtController = require('./controllers/DebtController');
const routes = express.Router();

routes.get('/debts', DebtController.index);
routes.get('/debt/:id', DebtController.show);
routes.post('/debts', DebtController.store);
routes.put('/debts/:id', DebtController.update);
routes.delete('/debts/:id', DebtController.destroy);

module.exports = routes;