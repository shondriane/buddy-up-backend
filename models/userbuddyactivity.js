'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class UserBuddyActivity extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	UserBuddyActivity.init(
		{
			userBuddyId: DataTypes.INTEGER,
			activityId: DataTypes.INTEGER
		},
		{
			sequelize,
			modelName: 'UserBuddyActivity',
			tableName: 'user_buddy_activities'
		}
	);
	return UserBuddyActivity;
};
