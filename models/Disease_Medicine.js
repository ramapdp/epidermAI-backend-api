module.exports = (sequelize, DataTypes) => {
   const Disease_Medicine = sequelize.define('disease_medicine', {
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
      tableName: 'disease_medicine'
   });

   return Disease_Medicine;
}