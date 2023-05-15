module.exports = (sequelize, Sequelize) => {
    const Theory = sequelize.define("theories", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING
      },
      text: {
        type: Sequelize.STRING
      },
      examples: {
        type: Sequelize.STRING
      }
    });
  
    return Theory;
  };