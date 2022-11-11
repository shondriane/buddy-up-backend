const { User, UserBuddy } = require('../models');

const GetAllUserBuddyFollowers = async (req, res) => {
	try {
		const userBuddyFollowers = await User.findAll({
			include: [
				{
					model: User,
					as: 'buddies_followers',
					through: { attributes: [] }
				}
			]
		});
		res.send(userBuddyFollowers);
	} catch (error) {
		throw error;
	}
};

const GetAllUserBuddyFollowing = async (req, res) => {
	try {
		const userBuddyFollowing = await User.findAll({
			include: [
				{
					model: User,
					as: 'buddies_following',
					through: { attributes: [] }
				}
			]
		});
		res.send(userBuddyFollowing);
	} catch (error) {
		throw error;
	}
};

const GetUserBuddyById = async (req, res) => {
	try {
		const userBuddyId = parseInt(req.params.user_buddy_id);
		const userBuddy = await UserBuddy.findAll({
			where: { id: userBuddyId }
		});
		res.send(userBuddy);
	} catch (error) {
		throw error;
	}
};

const GetUserBuddiesByUserId = async (req, res) => {
	try {
		const userId = parseInt(req.params.user_id);
		const userBuddies = await User.findAll({
			where: { id: userId },
			include: [
				{
					model: User,
					as: 'buddies_followers',
					through: { attributes: [] }
				}
			]
		});
		res.send(userBuddies);
	} catch (error) {
		throw error;
	}
};

const GetUserBuddiesByBuddyId = async (req, res) => {
	try {
		const buddyId = parseInt(req.params.buddy_id);
		const userBuddies = await User.findAll({
			where: { id: buddyId },
			include: [
				{
					model: User,
					as: 'buddies_following',
					through: { attributes: [] }
				}
			]
		});
		res.send(userBuddies);
	} catch (error) {
		throw error;
	}
};

const CreateUserBuddy = async (req, res) => {
	try {
		const userId = parseInt(req.params.user_id);
		const buddyId = parseInt(req.params.buddy_id);
		const userBuddy = await UserBuddy.create({
			userId,
			buddyId,
			...req.body
		});
		res.send(userBuddy);
	} catch (error) {
		throw error;
	}
};

const UpdateUserBuddyById = async (req, res) => {
	try {
		const userBuddyId = parseInt(req.params.user_buddy_id);
		const updatedUserBuddy = await UserBuddy.update(req.body, {
			where: { id: userBuddyId },
			returning: true
		});
		res.send(updatedUserBuddy);
	} catch (error) {
		throw error;
	}
};

const DeleteUserBuddyById = async (req, res) => {
	try {
		const userBuddyId = parseInt(req.params.user_buddy_id);
		await UserBuddy.destroy({ where: { id: userBuddyId } });
		res.send({ message: `Deleted user with an id of ${userBuddyId}` });
	} catch (error) {
		throw error;
	}
};

module.exports = {
	GetAllUserBuddyFollowers,
	GetAllUserBuddyFollowing,
	GetUserBuddyById,
	GetUserBuddiesByUserId,
	GetUserBuddiesByBuddyId,
	CreateUserBuddy,
	UpdateUserBuddyById,
	DeleteUserBuddyById
};
