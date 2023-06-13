module.exports = (sequelize, DataTypes) => {
  const Disease = sequelize.define('disease_details', {
    dss_id: {
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
    createdAt: false,
    updatedAt: false
  }, {
    tableName: 'disease_details'
  });

  Disease.associate = (models) => {
    Disease.belongsToMany(models.medicine_details, {
      through: models.disease_medicine,
      foreignKey: 'dss_id',
      as: 'medicine_details'
    });
  };

  return Disease;
}