'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class UserCategory extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	UserCategory.init(
		{
			userId: {
				type: DataTypes.INTEGER,
				onDelete: 'CASCADE',
				references: {
					model: 'users',
					key: 'id'
				}
			},
			categoryId: DataTypes.INTEGER
			// {
			// 	type: DataTypes.INTEGER,
			// 	onDelete: 'CASCADE',
			// 	references: {
			// 		model: 'categories',
			// 		key: 'id'
			// 	}
			// }
		},
		{
			sequelize,
			modelName: 'UserCategory',
			tableName: 'user_categories'
		}
	);
	return UserCategory;
};
