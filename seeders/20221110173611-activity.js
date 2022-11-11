
'use strict';
const falso = require ('@ngneat/falso')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const activities =[...Array(100)].map(()=>({
      categoryId:falso.randNumber({min:1,max:20}),
      userId: falso.randNumber({min:1,max:100}),
      name:falso.randDrinks(),
      description: falso.randText(),
      streetAddress: falso.randStreetAddress(),
      city:falso.randCity(),
      state:falso.randState(),
      zipCode:parseInt(falso.randZipCode()),
      country:falso.randCountry(),
      date:falso.randFutureDate(),

      createdAt: falso.randPastDate(),
  updatedAt:falso.randRecentDate()
    }))
    await  queryInterface.bulkInsert('activities', activities)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('activities')
  }
}