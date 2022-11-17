const { User, UserRejectedBuddy, sequelize } = require('../models');
const db = require('../models/index');

const GetAllUserNotBuddyFollowers = async (req, res) => {
	try {
		const userNotBuddyFollowers = await User.findAll({
			include: [
				{
					model: User,
					as: 'not_buddies_followers',
					through: { attributes: [] }
				}
			]
		});
		res.send(userNotBuddyFollowers);
	} catch (error) {
		throw error;
	}
};

const GetAllUserNotBuddyFollowing = async (req, res) => {
	try {
		const userNotBuddyFollowing = await User.findAll({
			include: [
				{
					model: User,
					as: 'not_buddies_following',
					through: { attributes: [] }
				}
			]
		});
		res.send(userNotBuddyFollowing);
	} catch (error) {
		throw error;
	}
};

const GetUserRejectedBuddyById = async (req, res) => {
	try {
		const UserRejectedBuddyId = parseInt(req.params.user_rejected_buddy_id);
		const userRejectedBuddy = await UserRejectedBuddy.findAll({
			where: { id: UserRejectedBuddyId }
		});
		res.send(userRejectedBuddy);
	} catch (error) {
		throw error;
	}
};

const GetUserRejectedBuddiesByUserId = async (req, res) => {
	try {
		const userId = parseInt(req.params.user_id);
		const userBuddies = await User.findAll({
			where: { id: userId },
			include: [
				{
					model: User,
					as: 'not_buddies_followers',
					through: { attributes: [] }
				}
			]
		});
		res.send(userBuddies);
	} catch (error) {
		throw error;
	}
};

const GetUserRejectedBuddiesByBuddyId = async (req, res) => {
	try {
		const rejectedBuddyId = parseInt(req.params.rejected_buddy_id);
		const userRejectedBuddies = await User.findAll({
			where: { id: rejectedBuddyId },
			include: [
				{
					model: User,
					as: 'not_buddies_following',
					through: { attributes: [] }
				}
			]
		});
		res.send(userRejectedBuddies);
	} catch (error) {
		throw error;
	}
};


const CreateUserRejectedBuddy = async (req, res) => {
	try {
		const userId = parseInt(req.params.user_id);
		const rejectedBuddyId = parseInt(req.params.rejected_buddy_id);
		const userRejectedBuddy = await db.sequelize.query(
			`INSERT INTO "user_rejected_buddies" ("userId","rejectedBuddyId","createdAt","updatedAt") VALUES (${userId},${rejectedBuddyId},current_timestamp,current_timestamp) RETURNING "userId","rejectedBuddyId","createdAt","updatedAt","id";`,
			{ type: sequelize.QueryTypes.INSERT }
		);
		res.send(userRejectedBuddy);
	} catch (error) {
		throw error;
	}
};

const UpdateUserRejectedBuddyById = async (req, res) => {
	try {
		const userRejectedBuddyId = parseInt(req.params.user_rejected_buddy_id);
		const updatedRejectedUserBuddy = await UserRejectedBuddy.update(
			req.body,
			{
				where: { id: userRejectedBuddyId },
				returning: true
			}
		);
		res.send(updatedRejectedUserBuddy);
	} catch (error) {
		throw error;
	}
};

const DeleteUserRejectedBuddyById = async (req, res) => {
	try {
		const userRejectedBuddyId = parseInt(req.params.user_rejected_buddy_id);
		await UserRejectedBuddy.destroy({ where: { id: userRejectedBuddyId } });
		res.send({
			message: `Deleted userRejectedBuddy with an id of ${userRejectedBuddyId}`
		});
	} catch (error) {
		throw error;
	}
};

module.exports = {
	GetAllUserNotBuddyFollowers,
	GetAllUserNotBuddyFollowing,
	GetUserRejectedBuddyById,
	GetUserRejectedBuddiesByUserId,
	GetUserRejectedBuddiesByBuddyId,
	CreateUserRejectedBuddy,
	UpdateUserRejectedBuddyById,
	DeleteUserRejectedBuddyById
};
