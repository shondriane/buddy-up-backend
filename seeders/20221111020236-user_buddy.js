'use strict';
const falso = require('@ngneat/falso');
const { User } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: async (queryInterface, Sequelize) => {
		const users = await User.findAll({ raw: true });
		const userBuddiesList = users.map((u) => ({
			userId: u.id,
			buddyId: users[Math.floor(Math.random() * users.length)].id,
			createdAt: falso.randPastDate(),
			updatedAt: falso.randRecentDate()
		}));
		await queryInterface.bulkInsert('user_buddies', userBuddiesList);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('user_buddies');
	}
};
