'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkInsert('postingans', [
      {
        penggunaId: 1,
        kategoriId: 1,
        judulPost: 'judul',
        kontenPost: 'konten',
        coverKecil: 'cover kecil',
        coverBesar: 'cover besar',
        aktif: true,
        isKomentar: true
      },
      {
        penggunaId: 1,
        kategoriId: 2,
        judulPost: 'judul 2',
        kontenPost: 'konten ',
        coverKecil: 'cover kecil 2',
        coverBesar: 'cover besar 2',
        aktif: true,
        isKomentar: true
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkDelete('postingans', null, {});
  }
};
