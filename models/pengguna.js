'use strict';
module.exports = (sequelize, DataTypes) => {
  const pengguna = sequelize.define('penggunas', {
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    level: DataTypes.STRING,
    aktif: DataTypes.BOOLEAN
  }, {});
  pengguna.associate = function(models) {
    // associations can be defined here
    pengguna.hasMany(models.postingans, {
      foreignKey: 'penggunaId',
      as: 'postingans'
    })
  };
  return pengguna;
};