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
    return queryInterface.bulkInsert('prestasis', [
      {
        prestasi: 'Juara III',
        tingkat: 'MKQ Golongan Naskhoh Tingkat Kabupaten',
        tahun: '1993'
      },
      {
        prestasi: 'Juara II',
        tingkat: 'MHQ Golongan 30 Juz Wanita MTQ Banyuwangi',
        tahun: '1993'
      },
      {
        prestasi: 'Juara II',
        tingkat: 'Dewasa Putri MHQ JQWH Jawa Timur',
        tahun: '1994'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('prestasis', null, {});
  }
};
