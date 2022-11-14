const Router = require('express').Router();
const controller = require('../controllers/CategoryController');

Router.get('/', controller.GetAllCategories);
Router.get('/:category_id', controller.GetCategoryById);
Router.post(
	'/',
	middleware.stripToken,
	middleware.verifyToken,
	controller.CreateCategory
);
Router.put(
	'/:category_id',
	middleware.stripToken,
	middleware.verifyToken,
	controller.UpdateCategoryById
);
Router.delete(
	'/:category_id',
	middleware.stripToken,
	middleware.verifyToken,
	controller.DeleteCategoryById
);

module.exports = Router;
