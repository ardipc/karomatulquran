'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkInsert('kategoris', [
      {
        namaKategori: 'Pendidikan',
        deskripsiKategori: 'Deskripsi kategori pendidikan'
      },
      {
        namaKategori: 'Sosial',
        deskripsiKategori: 'Deskripsi kategori sosial'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkDelete('kategoris', null, {});
  }
};
