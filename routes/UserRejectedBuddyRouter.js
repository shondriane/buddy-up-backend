const Router = require('express').Router();
const controller = require('../controllers/UserRejectedBuddyController');

Router.get('/not-buddies-followers', controller.GetAllUserNotBuddyFollowers);
Router.get('/not-buddies-following', controller.GetAllUserNotBuddyFollowing);
Router.get('/:user_rejected_buddy_id', controller.GetUserRejectedBuddyById);
Router.get('/user/:user_id', controller.GetUserRejectedBuddiesByUserId);
Router.get(
	'/rejected-buddy/:rejected_buddy_id',
	controller.GetUserRejectedBuddiesByBuddyId
);
Router.get('/all/user/:user_id', controller.GetAllUserRejections);
Router.post(
	'/user/:user_id/rejected-buddy/:rejected_buddy_id',
	controller.CreateUserRejectedBuddy
);
Router.put('/:user_rejected_buddy_id', controller.UpdateUserRejectedBuddyById);
Router.delete(
	'/:user_rejected_buddy_id',
	controller.DeleteUserRejectedBuddyById
);

module.exports = Router;
