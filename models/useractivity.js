'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserActivity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserActivity.init({
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
				references: {
					model: 'users',
					key: 'id'
				}
    },
    activityId:{
      type:DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    } 
  }, {
    sequelize,
    modelName: 'User_Activities',
    tableName: 'user_activities'
  });
  return UserActivity;
};