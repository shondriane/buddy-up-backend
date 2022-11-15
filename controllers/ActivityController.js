const { Activity } = require('../models');

const GetAllActivities = async (req, res) => {
	try {
		const activities = await Activity.findAll();
		res.send(activities);
	} catch (error) {
		throw error;
	}
};

const GetActivityById = async (req, res) => {
	try {
		const activityId = parseInt(req.params.activity_id);
		const activity = await Activity.findByPk(activityId);
		res.send(activity);
	} catch (error) {
		throw error;
	}
};

const GetActivityByCategoryId = async (req, res) => {
	try {
		const categoryId = parseInt(req.params.category_id);
		const activities = await Activity.findAll({
			where: { categoryId: categoryId }
		});
		res.send(activities);
	} catch (error) {
		throw error;
	}
};

const GetActivityByUserId = async (req, res) => {
	try {
		const userId = parseInt(req.params.user_id);
		const activity = await Activity.findAll({ where: { userId: userId } });
		res.send(activity);
	} catch (error) {
		throw error;
	}
};

const CreateActivity = async (req, res) => {
	try {
		const activity = await Activity.create(req.body);
		res.send(activity);
	} catch (error) {
		throw error;
	}
};

const UpdateActivityById = async (req, res) => {
	try {
		const activityId = parseInt(req.params.activity_id);
		const updatedActivity = await Activity.update(req.body, {
			where: { id: activityId },
			returning: true
		});
		res.send(updatedActivity);
	} catch (error) {
		throw error;
	}
};

const DeleteActivityById = async (req, res) => {
	try {
		const activityId = parseInt(req.params.activity_id);
		await Activity.destroy({ where: { id: activityId } });
		res.send({ message: `Deleted activity with an id of ${activityId}` });
	} catch (error) {
		throw error;
	}
};

module.exports = {
	GetAllActivities,
	GetActivityById,
	GetActivityByUserId,
	GetActivityByCategoryId,
	CreateActivity,
	UpdateActivityById,
	DeleteActivityById
};
