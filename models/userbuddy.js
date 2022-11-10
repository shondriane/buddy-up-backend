'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class UserBuddy extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			UserBuddy.belongsToMany(models.Activity, {
				as: 'buddy_activities',
				through: models.UserBuddyActivity,
				foreignKey: 'userBuddyId'
			});
		}
	}
	UserBuddy.init(
		{
			userId: {
				type: DataTypes.INTEGER,
				onDelete: 'CASCADE',
				references: {
					model: 'users',
					key: 'id'
				}
			},
			buddyId: {
				type: DataTypes.INTEGER,
				onDelete: 'CASCADE',
				references: {
					model: 'users',
					key: 'id'
				}
			}
		},
		{
			sequelize,
			modelName: 'UserBuddy',
			tableName: 'user_buddies'
		}
	);
	return UserBuddy;
};
