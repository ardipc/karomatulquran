'use strict';
module.exports = (sequelize, DataTypes) => {
  const postingan = sequelize.define('postingans', {
    penggunaId: DataTypes.INTEGER,
    kategoriId: DataTypes.INTEGER,
    judulPost: DataTypes.STRING,
    kontenPost: DataTypes.TEXT,
    coverKecil: DataTypes.STRING,
    coverBesar: DataTypes.STRING,
    aktif: DataTypes.BOOLEAN,
    isKomentar: DataTypes.BOOLEAN
  }, {});
  postingan.associate = function(models) {
    // associations can be defined here
    postingan.belongsTo(models.kategoris, {
      foreignKey: 'kategoriId',
    });
    postingan.belongsTo(models.penggunas, {
      foreignKey: 'penggunaId',
    });
  };
  return postingan;
};

// 1 => 1
// 1 postingan => 1 kategori