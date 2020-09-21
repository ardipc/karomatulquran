'use strict';
module.exports = (sequelize, DataTypes) => {
  const pengaturan = sequelize.define('pengaturans', {
    name: DataTypes.STRING,
    value: DataTypes.STRING
  }, {});
  pengaturan.associate = function(models) {
    // associations can be defined here
  };
  return pengaturan;
};