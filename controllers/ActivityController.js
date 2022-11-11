const {Activity} = require('../models')

const GetAllActivities = async (req,res)=>{
    try{
        const activities= await Activity.findAll();
        res.send(activities)
    } catch (error){
throw error;
    }
}

const GetActivityById = async (req,res)=>{
    try{
        const activityId= parseInt(req.params.activity_id);
        const activity= await Activity.findByPk(activityId)
        res.send(activity)
    }
    catch (error){
        throw error;
    }
}

const CreateActivity = async (req,res)=>{
    try{
        const activity = await Activity.create(req.body)
        res.send(activity)
    } catch (error){
        throw error;
    }
}

const UpdateActivityById = async (req,res)=>{
   
    try{
        const activityId= parseInt(req.params.activity_id);
        const updatedActivity = await Activity.update(req.body,{
            where:{id:activityId},
            returning: true
        })
        res.send(updatedActivity)
    }catch(error){
        throw error
    }
}

const DeleteActivityById = async (req,res)=>{
    try{
        const activityId= parseInt(req.params.activity_id)
        await Activity.destroy({where: {id:activityId}})
        res.send({message: `Deleted category with an id of ${activityId}`})
    }catch (error){
        throw error
    }
}

module.exports={
    GetAllActivities,
    GetActivityById,
    CreateActivity,
    UpdateActivityById,
    DeleteActivityById
}
