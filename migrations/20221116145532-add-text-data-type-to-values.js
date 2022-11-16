'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		queryInterface.changeColumn('users', 'profilePicture', {
			type: Sequelize.TEXT
		});
		queryInterface.changeColumn('users', 'about', {
			type: Sequelize.TEXT
		});
		queryInterface.changeColumn('categories', 'image', {
			type: Sequelize.TEXT,
			allowNull: false
		});
		queryInterface.changeColumn('activities', 'description', {
			type: Sequelize.TEXT
		});
		queryInterface.changeColumn('activities', 'image', {
			type: Sequelize.TEXT
		});
	},

	async down(queryInterface, Sequelize) {
		queryInterface.changeColumn('users', 'profilePicture', {
			type: Sequelize.STRING
		});
		queryInterface.changeColumn('users', 'about', {
			type: Sequelize.STRING
		});
		queryInterface.changeColumn('categories', 'image', {
			type: Sequelize.STRING,
			allowNull: false
		});
		queryInterface.changeColumn('activities', 'description', {
			type: Sequelize.STRING
		});
		queryInterface.changeColumn('activities', 'image', {
			type: Sequelize.STRING
		});
	}
};
