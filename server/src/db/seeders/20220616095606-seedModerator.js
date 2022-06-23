'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const fields = [{
      firstName: 'Moderator',
      lastName: 'Moderator',
      displayName: 'Moderator',
      password: bcrypt.hashSync('Admin12345', 10),
      email: 'moderator@gmail.com',
      role: 'moderator',
    }];
    return queryInterface.bulkInsert('Users', fields, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
