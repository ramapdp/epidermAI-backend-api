const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
   const Medicine = sequelize.define('Medicine', {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    mdc_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mdc_desc: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    mdc_img: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
   }, {
      tableName: 'medicine_details'
   });
}