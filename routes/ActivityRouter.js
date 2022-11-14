const Router = require('express').Router();
const controller = require('../controllers/ActivityController');
const middleware = require('../middleware');

Router.get('/', controller.GetAllActivities);
Router.get('/:activity_id', controller.GetActivityById);
Router.get('/user/:user_id', controller.GetActivityByUserId);
Router.post(
	'/',
	middleware.stripToken,
	middleware.verifyToken,
	controller.CreateActivity
);
Router.put(
	'/:activity_id',
	middleware.stripToken,
	middleware.verifyToken,
	controller.UpdateActivityById
);
Router.delete(
	'/:activity_id',
	middleware.stripToken,
	middleware.verifyToken,
	controller.DeleteActivityById
);

module.exports = Router;
