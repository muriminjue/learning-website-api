'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('parents', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      firstname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lastname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      class: {
        allowNull: false,
        type: Sequelize.STRING
      },
      subjects: {
        allowNull: false,
        type: Sequelize.STRING
      },
      level: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      contact: {
        allowNull: false,
        type: Sequelize.STRING
      },
       createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      contact_name: {
        allowNull: false,
        type: Sequelize.STRING
      },     
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('parents');
  }
};