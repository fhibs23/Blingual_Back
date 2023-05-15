module.exports = (sequelize, Sequelize) => {
    const LessonProgress= sequelize.define("lessonProgress", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      numOfTasks: {
        type: Sequelize.INTEGER,
      },
      points: {
        type: Sequelize.INTEGER,
      },
      finished:{
        type: Sequelize.BOOLEAN,
      },
      percentOfRightAnsw:{
        type: Sequelize.INTEGER,
      }
    });
  
    return LessonProgress;
  };