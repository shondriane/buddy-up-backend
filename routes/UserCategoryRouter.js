const Router = require ('express').Router()
const controller = require ('../controllers/UserCategoryController')

Router.get('/', controller.GetUserCategories)
Router.get('/:user_id', controller.GetUserCategoriesById)
Router.post('/', controller.CreateUser)
Router.put('/:user_id', controller.UpdateUserById)
Router.delete('/:user_id', controller.DeleteUserById)

module.exports= Router