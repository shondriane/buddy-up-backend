'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class UserRejectedBuddy extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			UserRejectedBuddy.belongsToMany(models.Activity, {
				as: 'rejected_buddy_activities',
				through: models.UserRejectedBuddyActivity,
				foreignKey: 'userRejectedBuddyId'
			});
		}
	}
	UserRejectedBuddy.init(
		{
			userId: {
				type: DataTypes.INTEGER,
				onDelete: 'CASCADE',
				references: {
					model: 'users',
					key: 'id'
				}
			},
			rejectedBuddyId: {
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
			modelName: 'UserRejectedBuddy',
			tableName: 'user_rejected_buddies'
		}
	);
	return UserRejectedBuddy;
};
