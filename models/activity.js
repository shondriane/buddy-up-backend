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
			Activity.belongsToMany(models.UserBuddy, {
				as: 'activity_buddies',
				through: models.UserBuddyActivity,
				foreignKey: 'activityId'
			});
		}
	}
	Activity.init(
		{
			categoryId: DataTypes.INTEGER,
			userId: DataTypes.INTEGER,
			name: DataTypes.STRING,
			description: DataTypes.STRING,
			streetAddress: DataTypes.STRING,
			streetAddress2: DataTypes.STRING,
			city: DataTypes.STRING,
			state: DataTypes.STRING,
			zipCode: DataTypes.NUMBER,
			country: DataTypes.STRING
		},
		{
			sequelize,
			modelName: 'Activity',
			tableName: 'activities'
		}
	);
	return Activity;
};
