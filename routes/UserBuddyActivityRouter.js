const Router = require('express').Router();
const controller = require('../controllers/UserBuddyActivityController');

Router.get('/', controller.GetAllUserBuddyActivities);
Router.get(
	'/:user_buddy_activity_id',
	controller.GetAllUserBuddyActivitiesById
);
Router.get(
	'/user-buddy/:user_buddy_id',
	controller.GetUserBuddyActivitiesByUserBuddyId
);
Router.get(
	'/activity/:activity_id',
	controller.GetUserBuddyActivitiesByActivityId
);
Router.post(
	'/user-buddy/:user_buddy_id/activity/:activity_id',
	controller.CreateUserBuddyActivity
);
Router.put('/:user_buddy_activity_id', controller.UpdateUserBuddyActivityById);
Router.delete(
	'/:user_buddy_activity_id',
	controller.DeleteUserBuddyActivityById
);

module.exports = Router;
