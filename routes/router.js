const express = require('express');
const bodyParser = require('body-parser');
var routes = express();
const controller = require('../controller/controller');


routes.use(bodyParser.json());


//creates routes..

routes.post('/add', controller.create);
routes.post('/get', controller.view);
routes.put('/update/:id', controller.update);
routes.delete('/delete/:id', controller.remove);


module.exports = routes;