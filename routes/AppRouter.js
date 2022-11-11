const Router = require('express').Router();
const UserRouter = require('./UserRouter');
const ActivityRouter = require('./ActivityRouter');
const CategoryRouter = require('./CategoryRouter');
const PostRouter = require('./PostRouter');
const UserBuddyActivityRouter = require('./UserBuddyActivityRouter');
const UserBuddyRouter = require('./UserBuddyRouter');
const UserCategoryRouter = require('./UserCategoryRouter');
const AuthRouter = require('./AuthRouter');

Router.use('/users', UserRouter);
// Router.use('/activities', ActivityRouter);
// Router.use('/categories', CategoryRouter);
// Router.use('/posts', PostRouter);
// Router.use('/user-buddy-activities', UserBuddyActivityRouter);
Router.use('/user-buddies', UserBuddyRouter);
// Router.use('/user-categories', UserCategoryRouter);
// Router.use('/auth', AuthRouter);

module.exports = Router;
