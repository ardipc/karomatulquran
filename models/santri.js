'use strict';
module.exports = (sequelize, DataTypes) => {
  const santri = sequelize.define('santris', {
    asalDaerah: DataTypes.STRING,
    tahun: DataTypes.STRING,
    jumlah: DataTypes.STRING
  }, {});
  santri.associate = function(models) {
    // associations can be defined here
  };
  return santri;
};