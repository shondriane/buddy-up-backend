'use strict';
const falso = require('@ngneat/falso');
const { UserBuddy, Activity } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: async (queryInterface, Sequelize) => {
		const userBuddies = await UserBuddy.findAll({ raw: true });
		const activities = await Activity.findAll({ raw: true });
		const userBuddyActivitiesList = userBuddies.map((uB) => ({
			userBuddyId: uB.id,
			activityId:
				activities[Math.floor(Math.random() * activities.length)].id,
			createdAt: falso.randPastDate(),
			updatedAt: falso.randRecentDate()
		}));
		await queryInterface.bulkInsert(
			'user_buddy_activities',
			userBuddyActivitiesList
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('user_buddy_activities');
	}
};
