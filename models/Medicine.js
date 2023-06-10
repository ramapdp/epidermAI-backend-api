module.exports = (sequelize, DataTypes) => {
  const Medicine = sequelize.define('medicine', {
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
    }
  }, {
    tableName: 'medicine_details'
  });

  return Medicine;
}