'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			firstName: {
				type: Sequelize.STRING
			},
			lastName: {
				type: Sequelize.STRING
			},
			username: {
				type: Sequelize.STRING
			},
			password: {
				type: Sequelize.STRING
			},
			email: {
				type: Sequelize.STRING
			},
			phoneNumber: {
				type: Sequelize.STRING
			},
			age: {
				type: Sequelize.INTEGER
			},
			profilePicture: {
				type: Sequelize.STRING
			},
			about: {
				type: Sequelize.STRING
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('users');
	}
};
