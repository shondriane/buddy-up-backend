'use strict';
const falso = require('@ngneat/falso');
const { User, Category } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: async (queryInterface, Sequelize) => {
		const users = await User.findAll({ raw: true });
		const categories = await Category.findAll({ raw: true });
		const activities = [...Array(100)].map((a) => ({
			categoryId:
				categories[Math.floor(Math.random() * categories.length)].id,
			userId: users[Math.floor(Math.random() * users.length)].id,
			name: falso.randDrinks(),
			description: falso.randText(),
			streetAddress: falso.randStreetAddress(),
			city: falso.randCity(),
			state: falso.randState(),
			zipCode: parseInt(falso.randZipCode()),
			country: falso.randCountry(),
			date: falso.randFutureDate(),
			image: falso.randImg(),
			createdAt: falso.randPastDate(),
			updatedAt: falso.randRecentDate()
		}));
		await queryInterface.bulkInsert('activities', activities);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('activities');
	}
};
