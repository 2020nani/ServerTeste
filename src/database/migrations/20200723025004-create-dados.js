'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('dados',   { 
      id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    firstname: {
      type: Sequelize.STRING,
      allowNull: false,
      
    }, 
    lastname: {
      type: Sequelize.STRING,
      allowNull: false,
    }, 
    participation: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    }, 
    created_at:{
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },

    });
    
  },

  down: queryInterface => {
    return queryInterface.dropTable('dados');
  
  }
};
