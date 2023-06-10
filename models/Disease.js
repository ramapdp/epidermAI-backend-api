const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const Disease = sequelize.define('Disease', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    dss_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dss_desc: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    dss_img: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'disease_details'
  });
}