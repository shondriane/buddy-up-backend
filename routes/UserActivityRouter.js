const Router = require('express').Router();
const controller = require('../controllers/UserActivityController');

Router.get('/', controller.GetAllUserActivities);
Router.get('/all', controller.GetAllUsersAndActivities);
Router.get('/:user_activity_id', controller.GetAllUsersAndActivitiesById);
Router.get(
	'/user/:user_created_id',
	controller.GetAllUsersAndActivitiesByUserId
);
Router.get(
	'/activity/:activity_listed_id',
	controller.GetAllUsersAndActivitiesByActivityId
);
Router.post(
	'/user/:user_created_id/activity/:activity_id',
	controller.CreateUserActivity
);
Router.put('/:user_activity_id', controller.UpdateUserActivityById);
Router.delete('/:user_activity_id', controller.DeleteUserActivityById);

module.exports = Router;
