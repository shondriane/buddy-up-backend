const Router = require('express').Router();
const controller = require('../controllers/UserBuddyController');

Router.get('/buddies-followers', controller.GetAllUserBuddyFollowers);
Router.get('/buddies-following', controller.GetAllUserBuddyFollowing);
Router.get('/:user_buddy_id', controller.GetUserBuddyById);
Router.get('/user/:user_id', controller.GetUserBuddiesByUserId);
Router.get('/buddy/:buddy_id', controller.GetUserBuddiesByBuddyId);
Router.post('/user/:user_id/buddy/:buddy_id', controller.CreateUserBuddy);
Router.put('/:user_buddy_id', controller.UpdateUserBuddyById);
Router.delete('/:user_buddy_id', controller.DeleteUserBuddyById);

module.exports = Router;
