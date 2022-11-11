const Router = require('express').Router();
const controller = require('../controllers/CategoryController');

Router.get('/', controller.GetAllCategories);
Router.get('/:category_id', controller.GetCategoryById);
Router.post('/', controller.CreateCategory);
Router.put('/:category_id', controller.UpdateCategoryById);
Router.delete('/:category_id', controller.DeleteCategoryById);

module.exports = Router;
