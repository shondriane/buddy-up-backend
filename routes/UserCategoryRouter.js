const Router = require('express').Router();
const controller = require('../controllers/UserCategoryController');

Router.get('/', controller.GetAllUserCategories);
Router.get('/user/:user_id', controller.GetUserCategoriesByUserId);
Router.get('category/:category_id', controller.GetUserCategoriesByCategoryId);
Router.post(
	'/user/:user_id/category/:category_id',
	controller.CreateUserCategory
);
Router.put('/:user_category_id', controller.UpdateUserCategoryById);
Router.delete('/:user_category_id', controller.DeleteUserCategoryById);

module.exports = Router;
