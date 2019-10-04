'use strict';
module.exports = (sequelize, DataTypes) => {
  const prestasi = sequelize.define('prestasis', {
    prestasi: DataTypes.STRING,
    tingkat: DataTypes.STRING,
    tahun: DataTypes.STRING
  }, {});
  prestasi.associate = function(models) {
    // associations can be defined here
  };
  return prestasi;
};