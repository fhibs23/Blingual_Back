module.exports = (sequelize, Sequelize) => {
    const Lesson = sequelize.define("lessons", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      theme: {
        type: Sequelize.STRING,
      },
      taskCount: {
        type: Sequelize.INTEGER,
      }
    });
  
    return Lesson;
  };