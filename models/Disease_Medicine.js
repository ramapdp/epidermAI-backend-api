module.exports = (sequelize, DataTypes) => {
   const Disease_Medicine = sequelize.define('disease_medicine', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false
      },
      disease_id: {
         type: DataTypes.INTEGER,
         allowNull: false
      },
      medicine_id: {
         type: DataTypes.INTEGER,
         allowNull: false
      }
   }, {
      tableName: 'disease_medicine'
   });

   return Disease_Medicine;
}