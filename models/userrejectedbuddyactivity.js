'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class UserRejectedBuddyActivity extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	UserRejectedBuddyActivity.init(
		{
			userRejectedBuddyId: {
				type: DataTypes.INTEGER,
				onDelete: 'CASCADE',
				references: {
					model: 'user_rejected_buddies',
					key: 'id'
				}
			},
			activityId: {
				type: DataTypes.INTEGER,
				onDelete: 'CASCADE',
				references: {
					model: 'activities',
					key: 'id'
				}
			}
		},
		{
			sequelize,
			modelName: 'UserRejectedBuddyActivity',
			tableName: 'user_rejected_buddy_activities'
		}
	);
	return UserRejectedBuddyActivity;
};
