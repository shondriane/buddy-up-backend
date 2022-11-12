const { Activity, User, UserActivity } = require('../models');

const GetAllUserActivities = async (req,res)=>{
	try{
		const userActivities = await UserActivity.findAll()
		res.send(userActivities)
	}catch(error){
		throw error
	}
}

const GetAllUsersAndActivities = async (req, res) => {
	try {
		const userActivities = await User.findAll({
			include: [
				{
					model: Activity,
					as: 'created_list',
					through: { attributes: [] }
				}
			]
		});
		res.send(userActivities);
	} catch (error) {
		throw error;
	}
};


const  GetAllUsersAndActivitiesById = async (req, res) => {
	try {
		const userActivityId = parseInt(req.params.user_activity_id);
		const userActivity = await UserActivity.findAll({
			where: { id: userActivityId },
		
		});
		res.send(userActivity);
	} catch (error) {
		throw error;
	}
};

const GetAllUsersAndActivitiesByUserId = async (req, res) => {
	try {
		const userCreatedId = parseInt(req.params.user_created_id);
		const userActivityByUserId = await User.findAll({
			where: { id: userCreatedId },
			include: [
				{
					model: Activity,
					as: 'created_list',
					through: { attributes: [] }
				}
			]
		});
		res.send(userActivityByUserId);
	} catch (error) {
		throw error;
	}
};

const GetAllUsersAndActivitiesByActivityId= async (req, res) => {
	try {
		const activityListedId = parseInt(req.params.activity_listed_id);
		const getUserActivityByActivityId = await Activity.findAll({
			where: { id: activityListedId },
			include: [
				{
					model: User,
					as: 'activities_user_list',
					through: { attributes: [] }
				}
			]
		});
		res.send(getUserActivityByActivityId);
	} catch (error) {
		throw error;
	}
};

const CreateUserActivity = async (req, res) => {
	try {
		const userCreatedId = parseInt(req.params.user_created_id);
		const activityListedId = parseInt(req.params.activity_listed_id);
		const userActivity = await UserActivity.create({
			userCreatedId,
			activityListedId,
			...req.body
		});
		res.send(userActivity);
	} catch (error) {
		throw error;
	}
};

const UpdateUserActivityById = async (req, res) => {
	try {
		const userActivityId = parseInt(req.params.user_activity_id);
		const updatedUserActivity = await UserActivity.update(
			req.body,
			{
				where: { id: userActivityId },
				returning: true
			}
		);
		res.send(updatedUserActivity);
	} catch (error) {
		throw error;
	}
};

const DeleteUserActivityById = async (req, res) => {
	try {
		const userActivityId = parseInt(req.params.user_activity_id);
		await UserActivity.destroy({ where: { id: userActivityId } });
		res.send({
			message: `Deleted user activity with an id of ${userActivityId}`
		});
	} catch (error) {
		throw error;
	}
}


module.exports = {
	GetAllUserActivities,
	GetAllUsersAndActivities,
	GetAllUsersAndActivitiesById,
	GetAllUsersAndActivitiesByUserId,
	GetAllUsersAndActivitiesByActivityId,
	CreateUserActivity,
	UpdateUserActivityById,
	DeleteUserActivityById
	// GetUserBuddyActivitiesByUserBuddyId,
	// GetUserBuddyActivitiesByActivityId,
	// CreateUserBuddyActivity,
	// UpdateUserBuddyActivityById,
	// DeleteUserBuddyActivityById
};
