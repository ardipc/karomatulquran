'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('postingans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      penggunaId: {
        type: Sequelize.INTEGER
      },
      kategoriId: {
        type: Sequelize.INTEGER
      },
      judulPost: {
        type: Sequelize.STRING
      },
      kontenPost: {
        type: Sequelize.TEXT
      },
      coverKecil: {
        type: Sequelize.STRING
      },
      coverBesar: {
        type: Sequelize.STRING
      },
      aktif: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      isKomentar: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('postingans');
  }
};