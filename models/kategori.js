'use strict';
module.exports = (sequelize, DataTypes) => {
  const kategori = sequelize.define('kategoris', {
    namaKategori: DataTypes.STRING,
    deskripsiKategori: DataTypes.STRING
  }, {});
  kategori.associate = function(models) {
    // associations can be defined here
    kategori.hasMany(models.postingans, {
	    foreignKey: 'kategoriId',
	    as: 'postingans'
	  });
  };
  return kategori;
};