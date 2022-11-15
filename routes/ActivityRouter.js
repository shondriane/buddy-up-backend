const Router = require('express').Router();
const controller = require('../controllers/ActivityController');
const middleware = require('../middleware');

Router.get('/', controller.GetAllActivities);
Router.get('/category/:category_id', controller.GetActivitiesByCategoryId);
Router.get('/user/:user_id', controller.GetActivityByUserId);
Router.get('/:activity_id', controller.GetActivityById);
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
