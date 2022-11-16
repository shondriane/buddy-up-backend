const Router = require('express').Router();
const controller = require('../controllers/UserRejectedBuddyActivityController');

Router.get('/', controller.GetAllUserRejectedBuddyActivities);
Router.get(
	'/:user_rejected_buddy_activity_id',
	controller.GetAllUserRejectedBuddyActivitiesById
);
Router.get(
	'/user-rejected-buddy/:user_rejected_buddy_id',
	controller.GetUserRejectedBuddyActivitiesByUserBuddyId
);
Router.get(
	'/activity/:activity_id',
	controller.GetUserRejectedBuddyActivitiesByActivityId
);
Router.post(
	'/user-rejected-buddy/:user_rejected_buddy_id/activity/:activity_id',
	controller.CreateUserRejectedBuddyActivity
);
Router.put(
	'/:user_rejected_buddy_activity_id',
	controller.UpdateUserRejectedBuddyActivityById
);
Router.delete(
	'/:user_rejected_buddy_activity_id',
	controller.DeleteUserRejectedBuddyActivityById
);

module.exports = Router;
