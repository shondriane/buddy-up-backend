'use strict';
const falso = require ('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users =[...Array(100)].map(()=>({
      username: falso.randUserName(),
      firstName: falso.randFirstName(),
      lastName: falso.randLastName(),
      passwordDigest: falso.randPassword(),
      email:falso.randEmail(),
      phoneNumber: falso.randPhoneNumber(),
      age: falso.randNumber({ min: 18, max: 130 }),
      profilePicture: falso.randImg(),
      about:falso.randText({max:50}),
      createdAt: falso.randPastDate(),
      updatedAt:falso.randRecentDate()
    }))
    await  queryInterface.bulkInsert('users', users)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users')
  }
}