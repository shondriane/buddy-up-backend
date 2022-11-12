'use strict'
const falso = require('@ngneat/falso')
const { User, Activity } = require('../models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const user = await User.findAll({ raw: true })
    const activities = await Activity.findAll({ raw: true })
    const userActivitiesList = user.map((u) => ({
      userCreatedId: u.id,
      activityListedId:
        activities[Math.floor(Math.random() * activities.length)].id,
      createdAt: falso.randPastDate(),
      updatedAt: falso.randRecentDate()
    }))
    await queryInterface.bulkInsert('user_activities', userActivitiesList)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user_activities')
  }
}
