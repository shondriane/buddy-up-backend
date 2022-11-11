const {UserCategory} = require('../models')

const GetAllUserCategories = async (req,res)=>{
    try{
        const category= await UserCategory.findAll();
        res.send(category)
    } catch (error){
throw error;
    }
}

const GetUserCategoriesByUserId = async (req,res)=>{
    try{
        const userId= parseInt(req.params.user_id);
        const userCategory= await UserCategory.findByPk(userId)
        res.send(userCategory)
    }
    catch (error){
        throw error;
    }
}

const GetUserCategoriesByCategoryId = async(req,res)=>{
    try{
        const categoryId= parseInt(req.params.category_id);
        const userCategory= await UserCategory.findByPk(categoryId)
        res.send(userCategory)
    }
    catch (error){
        throw error;
    }
}

const CreateUserCategory = async (req,res)=>{
    try{
        const categoryId= parseInt(req.params.category_id);
        const userId= parseInt(req.params.user_id);
        const userCategory = await UserCategory.create({categoryId,userId,...req.body})
        res.send(userCategory)
    } catch (error){
        throw error;
    }
}

const UpdateUserCategoryById = async (req,res)=>{
   
    try{
        const userCategoryId= parseInt(req.params.user_category_id);
        const updatedUserCategory = await UserCategory.update(req.body,{
            where:{id:userCategoryId},
            returning: true
        })
        res.send(updatedUserCategory)
    }catch(error){
        throw error
    }
}

const DeleteUserCategoryById = async (req,res)=>{
    try{
        const userCategoryId= parseInt(req.params.user_category_id)
        await UserCategory.destroy({where: {id:userCategoryId}})
        res.send({message: `Deleted category with an id of ${userCategoryId}`})
    }catch (error){
        throw error
    }
}

module.exports={
    GetAllUserCategories,
    GetUserCategoriesByUserId,
    GetUserCategoriesByCategoryId,
    CreateUserCategory,
    UpdateUserCategoryById,
    DeleteUserCategoryById
}

// Router.get('/', controller.GetAllUserCategories);
// Router.get('/user/:user_id', controller.GetUserCategoriesByUserId);
// Router.get('category/:category_id', controller.GetUserCategoriesByCategoryId);
// Router.post(
// 	'/user/:user_id/category/:category_id',
// 	controller.CreateUserCategory
// );
// Router.put('/:user_category_id', controller.UpdateUserCategoryById);
// Router.delete('/:user_category_id', controller.DeleteUserCategoryById);