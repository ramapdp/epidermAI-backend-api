module.exports = (sequelize, DataTypes) => {
   const Disease_Medicines = sequelize.define('disease_medicines', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false
      },
      dss_id: {
         type: DataTypes.INTEGER,
         allowNull: false
      },
      mdc_id: {
         type: DataTypes.INTEGER,
         allowNull: false
      }
   }, {
      createdAt: false,
      updatedAt: false
   }, {
      tableName: 'disease_medicines'
   });

   return Disease_Medicines;
}