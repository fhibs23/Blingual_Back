module.exports = (sequelize, Sequelize) => {
    const Task= sequelize.define("tasks", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      type: {
        type: Sequelize.INTEGER,
      },
      question: {
        type: Sequelize.STRING,
      },
      choices:{
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      answer:{
        type: Sequelize.STRING,
      }
    });
  
    return Task;
  };