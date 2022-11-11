const {Category} = require('../models')

const GetAllCategories = async (req,res)=>{
    try{
        const category= await Category.findAll();
        res.send(category)
    } catch (error){
throw error;
    }
}

const GetCategoryById = async (req,res)=>{
    try{
        const categoryId= parseInt(req.params.category_id);
        const category= await Category.findByPk(categoryId)
        res.send(category)
    }
    catch (error){
        throw error;
    }
}

const CreateCategory = async (req,res)=>{
    try{
        const category = await Category.create(req.body)
        res.send(category)
    } catch (error){
        throw error;
    }
}

const UpdateCategoryById = async (req,res)=>{
   
    try{
        const categoryId= parseInt(req.params.category_id);
        const updatedCategory = await Category.update(req.body,{
            where:{id:categoryId},
            returning: true
        })
        res.send(updatedCategory)
    }catch(error){
        throw error
    }
}

const DeleteCategoryById = async (req,res)=>{
    try{
        const categoryId= parseInt(req.params.category_id)
        await Category.destroy({where: {id:categoryId}})
        res.send({message: `Deleted category with an id of ${categoryId}`})
    }catch (error){
        throw error
    }
}

module.exports={
    GetAllCategories,
    GetCategoryById,
    CreateCategory,
    UpdateCategoryById,
    DeleteCategoryById
}

