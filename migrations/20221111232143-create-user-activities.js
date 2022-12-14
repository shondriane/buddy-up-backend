'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_activities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userCreatedId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
          references: {
            model: 'users',
            key: 'id'
          }
      },
      activityListedId:{
        type:Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'activities',
          key: 'id'
        }
      } ,
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
    await queryInterface.dropTable('user_activities');
  }
};