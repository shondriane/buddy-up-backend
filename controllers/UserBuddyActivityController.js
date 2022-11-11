const { Activity, UserBuddy, UserBuddyActivity } = require('../models');

const GetAllUserBuddyActivities = async (req, res) => {
	try {
		const userBuddyActivity = await UserBuddy.findAll({
			include: [
				{
					model: Activity,
					as: 'buddy_activities',
					through: { attributes: [] }
				}
			]
		});
		res.send(userBuddyActivity);
	} catch (error) {
		throw error;
	}
};

const GetAllUserBuddyActivitiesById = async (req, res) => {
	try {
		const userBuddyActivityId = parseInt(req.params.user_buddy_activity_id);
		const userBuddyActivity = await UserBuddyActivity.findByPk(
			userBuddyActivityId
		);
		res.send(userBuddyActivity);
	} catch (error) {
		throw error;
	}
};

const GetUserBuddyActivitiesByUserBuddyId = async (req, res) => {
	try {
		const userBuddyId = parseInt(req.params.user_buddy_id);
		const userBuddyActivitiesByUserBuddyId = await UserBuddy.findAll({
			where: { id: userBuddyId },
			include: [
				{
					model: Activity,
					as: 'buddy_activities',
					through: { attributes: [] }
				}
			]
		});
		res.send(userBuddyActivitiesByUserBuddyId);
	} catch (error) {
		throw error;
	}
};

const GetUserBuddyActivitiesByActivityId = async (req, res) => {
	try {
		const activityId = parseInt(req.params.activity_id);
		const userBuddyActivitiesByActivityId = await Activity.findAll({
			where: { id: activityId },
			include: [
				{
					model: UserBuddy,
					as: 'activity_buddies',
					through: { attributes: [] }
				}
			]
		});
		res.send(userBuddyActivitiesByActivityId);
	} catch (error) {
		throw error;
	}
};

const CreateUserBuddyActivity = async (req, res) => {
	try {
		const userBuddyId = parseInt(req.params.user_buddy_id);
		const activityId = parseInt(req.params.activity_id);
		const userBuddyActivity = await UserBuddyActivity.create({
			userBuddyId,
			activityId,
			...req.body
		});
		res.send(userBuddyActivity);
	} catch (error) {
		throw error;
	}
};

const UpdateUserBuddyActivityById = async (req, res) => {
	try {
		const userBuddyActivityId = parseInt(req.params.user_buddy_activity_id);
		const updatedUserBuddyActivity = await UserBuddyActivity.update(
			req.body,
			{
				where: { id: userBuddyActivityId },
				returning: true
			}
		);
		res.send(updatedUserBuddyActivity);
	} catch (error) {
		throw error;
	}
};

const DeleteUserBuddyActivityById = async (req, res) => {
	try {
		const userBuddyActivityId = parseInt(req.params.user_buddy_activity_id);
		await UserBuddyActivity.destroy({ where: { id: userBuddyActivityId } });
		res.send({
			message: `Deleted user with an id of ${userBuddyActivityId}`
		});
	} catch (error) {
		throw error;
	}
};

module.exports = {
	GetAllUserBuddyActivities,
	GetAllUserBuddyActivitiesById,
	GetUserBuddyActivitiesByUserBuddyId,
	GetUserBuddyActivitiesByActivityId,
	CreateUserBuddyActivity,
	UpdateUserBuddyActivityById,
	DeleteUserBuddyActivityById
};
