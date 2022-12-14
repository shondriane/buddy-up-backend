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
			User.hasMany(models.Activity, {
				foreignKey: 'userId'
			});

			User.belongsToMany(models.Activity, {
				as: 'created_list',
				through: models.UserActivity,
				foreignKey: 'userCreatedId'
			});

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

			User.belongsToMany(models.User, {
				as: 'not_buddies_following',
				through: models.UserRejectedBuddy,
				foreignKey: 'userId'
			});

			User.belongsToMany(models.User, {
				as: 'not_buddies_followers',
				through: models.UserRejectedBuddy,
				foreignKey: 'rejectedBuddyId'
			});
		}
	}
	User.init(
		{
			firstName: {
				type: DataTypes.STRING,
				allowNull: false
			},
			lastName: {
				type: DataTypes.STRING,
				allowNull: false
			},
			username: {
				type: DataTypes.STRING,
				allowNull: false
			},
			passwordDigest: {
				type: DataTypes.STRING,
				allowNull: false
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					isEmail: true
				}
			},
			phoneNumber: DataTypes.STRING,
			age: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			profilePicture: DataTypes.TEXT,
			about: DataTypes.TEXT
		},
		{
			sequelize,
			modelName: 'User',
			tableName: 'users'
		}
	);
	return User;
};
