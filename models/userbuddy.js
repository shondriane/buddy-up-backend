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
			// define association here
		}
	}
	UserBuddy.init(
		{
			userId: DataTypes.INTEGER,
			buddyId: DataTypes.INTEGER
		},
		{
			sequelize,
			modelName: 'UserBuddy',
			tableName: 'user_buddies'
		}
	);
	return UserBuddy;
};
