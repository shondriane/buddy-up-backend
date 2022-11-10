'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.changeColumn('user_categories', 'categoryId', {
			type: Sequelize.INTEGER,
			onDelete: 'CASCADE',
			references: {
				model: 'categories',
				key: 'id'
			}
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.changeColumn('user_categories', 'categoryId', {
			type: Sequelize.INTEGER
		});
	}
};
