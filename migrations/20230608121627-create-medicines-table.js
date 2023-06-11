'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('medicine_details', {
      mdc_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      mdc_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      mdc_desc: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      mdc_img: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('medicine_details');
  }
};
