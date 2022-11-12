'use strict'
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categories = [...Array(20)].map(() => ({
      name: falso.randAnimalType(),
      createdAt: falso.randPastDate(),
      updatedAt: falso.randRecentDate()
    }))
    await queryInterface.bulkInsert('categories', categories)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories')
  }
}
