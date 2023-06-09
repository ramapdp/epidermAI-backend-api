'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config')[env];
require('dotenv').config();
const db = {};

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    dialect: "mysql",
    host: process.env.DB_HOSTNAME,
    dialectOptions: {
      socketPath: process.env.DB_LINK
    },
  }
);

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
//   sequelize = new Sequelize(
//     config.database,
//     config.username,
//     config.password,
//     {
//       dialect: 'mysql',
//       host: 34.101.197.94,
//       pool: {
//           max: 5,
//           min: 0,
//           acquire: 30000,
//           idle: 10000
//       },
//       dialectOptions: {
//           socketPath: '/cloudsql/adhaar-351813:us-central1:adhaar-sql'
//       },
//       logging: false,
//       operatorsAliases: false
//   }
//   );
// }

fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('index.js') === -1
    );
    // return (file.indexOf('.') !== 0) && (file !== "index.js") && (file.slice(-3) === '.js');
  })
  .forEach((file) => {
    // const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    // const model = sequelize.import(path.join(__dirname, file));
    // console.log(model);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db.medicine = require('./Medicine')(sequelize, Sequelize.DataTypes);
// db.disease = require('./Disease')(sequelize, Sequelize.DataTypes);
// db.disease_medicine = require('./Disease_Medicine')(sequelize, Sequelize.DataTypes);

// // many to many relation
// db.disease.belongsToMany(db.medicine, {through:'disease_medicine'});
// db.medicine.belongsToMany(db.disease, {through:'disease_medicine'});

// console.log(db);

module.exports = db;
