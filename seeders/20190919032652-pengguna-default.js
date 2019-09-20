'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('penggunas', [
      {
        nama: 'Administrator',
        email: 'administrator@karomatulquran.com',
        password: '082334093822',
        level: 'admin',
        aktif: true
      },
      {
        nama: 'Ahmad Ardiansyah',
        email: 'ahmad.ardiansyah@karomatulquran.com',
        password: '082334093822',
        level: 'client',
        aktif: true
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('penggunas', null, {});
  }
};
