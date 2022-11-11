'use strict';
const falso = require('@ngneat/falso');
const { db, UserBuddy, Activity } = require('../models');
const { QueryTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: async (queryInterface, Sequelize) => {
		// const sequelize = new Sequelize('buddy_up_development', {
		// 	host: 'localhost',
		// 	dialect: 'postgres'
		// });
		const userBuddies = await queryInterface.sequelize.query(
			'SELECT id FROM user_buddies'
		);
		const activities = await Activity.findAll({ raw: true });
		const userBuddyActivitiesList = userBuddies.map((userBuddy) => ({
			userBuddyId: userBuddy.id,
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
