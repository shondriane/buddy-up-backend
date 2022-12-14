const {
	Activity,
	UserRejectedBuddy,
	UserRejectedBuddyActivity,
	sequelize
} = require('../models');
const db = require('../models/index')

const GetAllUserRejectedBuddyActivities = async (req, res) => {
	try {
		const userRejectedBuddyActivity = await UserRejectedBuddy.findAll({
			include: [
				{
					model: Activity,
					as: 'rejected_buddy_activities',
					through: { attributes: [] }
				}
			]
		});
		res.send(userRejectedBuddyActivity);
	} catch (error) {
		throw error;
	}
};

const GetAllUserRejectedBuddyActivitiesById = async (req, res) => {
	try {
		const userRejectedBuddyActivityId = parseInt(
			req.params.user_rejected_buddy_activity_id
		);
		const userRejectedBuddyActivity =
			await UserRejectedBuddyActivity.findAll({
				where: { id: userRejectedBuddyActivityId }
			});
		res.send(userRejectedBuddyActivity);
	} catch (error) {
		throw error;
	}
};

const GetUserRejectedBuddyActivitiesByUserRejectedBuddyId = async (
	req,
	res
) => {
	try {
		const userRejectedBuddyId = parseInt(req.params.user_rejected_buddy_id);
		const userRejectedBuddyActivitiesByUserRejectedBuddyId =
			await UserRejectedBuddy.findAll({
				where: { id: userRejectedBuddyId },
				include: [
					{
						model: Activity,
						as: 'rejected_buddy_activities',
						through: { attributes: [] }
					}
				]
			});
		res.send(userRejectedBuddyActivitiesByUserRejectedBuddyId);
	} catch (error) {
		throw error;
	}
};

const GetUserRejectedBuddyActivitiesByActivityId = async (req, res) => {
	try {
		const activityId = parseInt(req.params.activity_id);
		const userRejectedBuddyActivitiesByActivityId = await Activity.findAll({
			where: { id: activityId },
			include: [
				{
					model: UserRejectedBuddy,
					as: 'rejected_activity_buddies',
					through: { attributes: [] }
				}
			]
		});
		res.send(userRejectedBuddyActivitiesByActivityId);
	} catch (error) {
		throw error;
	}
};

const GetRawUserRejectedBuddyActivitiesByActivityId = async(req,res)=>{
	try{
		const activityId = parseInt(req.params.activity_id);
		const userRejectedBuddyActivitiesByActivityId = await db.sequelize.query(`
		SELECT * FROM "user_rejected_buddy_activities" WHERE "activityId"=${activityId}
		`,
			{ type: sequelize.QueryTypes.SELECT }
		)
		res.send(userRejectedBuddyActivitiesByActivityId)
	}catch(error){
		throw error
	}
}

const CreateUserRejectedBuddyActivity = async (req, res) => {
	try {
		const userRejectedBuddyId = parseInt(req.params.user_rejected_buddy_id);
		const activityId = parseInt(req.params.activity_id);
		const userBuddyActivity = await UserRejectedBuddyActivity.create({
			userRejectedBuddyId,
			activityId,
			
		});
		res.send(userBuddyActivity);
	} catch (error) {
		throw error;
	}
};

const UpdateUserRejectedBuddyActivityById = async (req, res) => {
	try {
		const userRejectedBuddyActivityId = parseInt(
			req.params.user_rejected_buddy_activity_id
		);
		const updatedUserRejectedBuddyActivity =
			await UserRejectedBuddyActivity.update(req.body, {
				where: { id: userRejectedBuddyActivityId },
				returning: true
			});
		res.send(updatedUserRejectedBuddyActivity);
	} catch (error) {
		throw error;
	}
};

const DeleteUserRejectedBuddyActivityById = async (req, res) => {
	try {
		const userRejectedBuddyActivityId = parseInt(
			req.params.user_rejected_buddy_activity_id
		);
		await UserRejectedBuddyActivity.destroy({
			where: { id: userRejectedBuddyActivityId }
		});
		res.send({
			message: `Deleted userRejectedBuddyActivity with an id of ${userRejectedBuddyActivityId}`
		});
	} catch (error) {
		throw error;
	}
};

module.exports = {
	GetAllUserRejectedBuddyActivities,
	GetAllUserRejectedBuddyActivitiesById,
	GetUserRejectedBuddyActivitiesByUserRejectedBuddyId,
	GetUserRejectedBuddyActivitiesByActivityId,
	CreateUserRejectedBuddyActivity,
	UpdateUserRejectedBuddyActivityById,
	DeleteUserRejectedBuddyActivityById,
	GetRawUserRejectedBuddyActivitiesByActivityId
};
