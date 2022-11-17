const Router = require('express').Router();
const UserRouter = require('./UserRouter');
const ActivityRouter = require('./ActivityRouter');
const CategoryRouter = require('./CategoryRouter');
const UserBuddyActivityRouter = require('./UserBuddyActivityRouter');
const UserBuddyRouter = require('./UserBuddyRouter');
const UserCategoryRouter = require('./UserCategoryRouter');
const AuthRouter = require('./AuthRouter');
const UserActivityRouter = require('./UserActivityRouter');
const UserRejectedBuddyRouter = require('./UserRejectedBuddyRouter');
const UserRejectedBuddyActivityRouter = require('./UserRejectedBuddyActivityRouter');

Router.use('/users', UserRouter);
Router.use('/activities', ActivityRouter);
Router.use('/categories', CategoryRouter);
Router.use('/user-buddy-activities', UserBuddyActivityRouter);
Router.use('/user-buddies', UserBuddyRouter);
Router.use('/user-categories', UserCategoryRouter);
Router.use('/user-activities', UserActivityRouter);
Router.use('/auth', AuthRouter);
Router.use('/next-buddies', UserRejectedBuddyRouter);
Router.use('/next-buddy-activities', UserRejectedBuddyActivityRouter);

module.exports = Router;
