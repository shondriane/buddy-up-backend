'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('activities', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			categoryId: {
				type: Sequelize.INTEGER,
				onDelete: 'CASCADE',
				references: {
					model: 'categories',
					key: 'id'
				}
			},
			userId: {
				type: Sequelize.INTEGER,
				onDelete: 'CASCADE',
				references: {
					model: 'users',
					key: 'id'
				}
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false
			},
			description: {
				type: Sequelize.STRING
			},
			streetAddress: {
				type: Sequelize.STRING
			},
			streetAddress2: {
				type: Sequelize.STRING
			},
			city: {
				type: Sequelize.STRING
			},
			state: {
				type: Sequelize.STRING
			},
			zipCode: {
				type: Sequelize.INTEGER
			},
			country: {
				type: Sequelize.STRING
			},
			date: {
				type: Sequelize.DATE,
				allowNull: false
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
		await queryInterface.dropTable('activities');
	}
};
