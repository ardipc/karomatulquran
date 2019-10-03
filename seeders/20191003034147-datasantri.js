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
    return queryInterface.bulkInsert('santris', [
      {
        asalDaerah: 'Sidoarjo',
        tahun: 2010,
        jumlah: 45
      },
      {
        asalDaerah: 'Pasuruan',
        tahun: 2010,
        jumlah: 10
      },
      {
        asalDaerah: 'Mojokerto',
        tahun: 2010,
        jumlah: 20
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
    return queryInterface.bulkDelete('santris', null, {});
  }
};
