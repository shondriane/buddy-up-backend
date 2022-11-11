'use strict';
const falso = require('@ngneat/falso');
const { User, Category } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: async (queryInterface, Sequelize) => {
		const user = await User.findAll({ raw: true });
		const categories = await Category.findAll({ raw: true });
		const userCategoriesList = user.map((u) => ({
			userId: u.id,
			categoryId:
				categories[Math.floor(Math.random() * categories.length)].id,
			createdAt: falso.randPastDate(),
			updatedAt: falso.randRecentDate()
		}));
		await queryInterface.bulkInsert('user_categories', userCategoriesList);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('user_categories');
	}
};
