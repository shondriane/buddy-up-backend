const Router = require ('express').Router()
const controller = require ('../controllers/UserController')

Router.get('/', controller.GetAllUsers)
Router.get('/:user_id', controller.GetUserById)
Router.post('/', controller.CreateUser)
Router.put('/:user_id', controller.UpdateUserById)
Router.delete('/:user_id', controller.DeleteUserById)

module.exports= Router