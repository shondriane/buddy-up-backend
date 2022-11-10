'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			User.hasMany(models.Activity, { foreignKey: 'userId' });

			User.belongsToMany(models.Category, {
				as: 'categories_list',
				through: models.UserCategory,
				foreignKey: 'userId'
			});

			User.belongsToMany(models.User, {
				as: 'buddies_followers',
				through: models.UserBuddy,
				foreignKey: 'userId'
			});

			User.belongsToMany(models.User, {
				as: 'buddies_following',
				through: models.UserBuddy,
				foreignKey: 'buddyId'
			});
		}
	}
	User.init(
		{
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			username: DataTypes.STRING,
			password: DataTypes.STRING,
			email: DataTypes.STRING,
			phoneNumber: DataTypes.STRING,
			age: DataTypes.INTEGER,
			profilePicture: DataTypes.STRING,
			about: DataTypes.STRING
		},
		{
			sequelize,
			modelName: 'User',
			tableName: 'users'
		}
	);
	return User;
};
