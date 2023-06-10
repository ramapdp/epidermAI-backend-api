module.exports = (sequelize, DataTypes) => {
   const Disease_Medicine = sequelize.define('Disease_Medicine', {
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
}