'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Activity extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Activity.belongsTo(models.User, {
				foreignKey: 'userId'
			});

			Activity.belongsTo(models.Category, { foreignKey: 'categoryId' });

			Activity.belongsToMany(models.UserBuddy, {
				as: 'activity_buddies',
				through: models.UserBuddyActivity,
				foreignKey: 'activityId'
			});

			Activity.belongsToMany(models.User, {
				as: 'users_list',
				through: models.UserCategory,
				foreignKey: 'categoryId'
			});
			Activity.belongsToMany(models.User, {
				as: 'activities_user_list',
				through: models.UserActivity,
				foreignKey: 'activityListedId'
			});
		}
	}
	Activity.init(
		{
			categoryId: {
				type: DataTypes.INTEGER,
				onDelete: 'CASCADE',
				references: {
					model: 'categories',
					key: 'id'
				}
			},
			userId: {
				type: DataTypes.INTEGER,
				onDelete: 'CASCADE',
				references: {
					model: 'users',
					key: 'id'
				}
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			description: DataTypes.STRING,
			streetAddress: DataTypes.STRING,
			streetAddress2: DataTypes.STRING,
			city: DataTypes.STRING,
			state: DataTypes.STRING,
			zipCode: DataTypes.INTEGER,
			country: DataTypes.STRING,
			date: {
				type: DataTypes.DATE,
				allowNull: false
			}
		},
		{
			sequelize,
			modelName: 'Activity',
			tableName: 'activities'
		}
	);
	return Activity;
};
