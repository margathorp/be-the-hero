const express = require('express');
const OngController = require('./controller/OngController');
const IncidentController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');
const routes = express.Router();

routes.get('/ongs',OngController.Index);
routes.get('/ongs/:id', OngController.GetById);
routes.post('/ongs',OngController.Create) ;

routes.get('/incidents', IncidentController.Index);
routes.get('/incidents/:id', IncidentController.GetById);
routes.post('/incidents', IncidentController.Create);
routes.delete('/incidents/:id', IncidentController.Delete);

routes.get('/profile', ProfileController.Index);

routes.post('/session', SessionController.create)


module.exports = routes;