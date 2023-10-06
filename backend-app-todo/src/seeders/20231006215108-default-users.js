'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users',[
      {
        id: 1,
        name: "Administrador",
        email: "admin@todoapp.com.br",
        password: "admin123",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Alex",
        email: "alex@todoapp.com.br",
        password: "alex123",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
