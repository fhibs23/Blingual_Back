module.exports = (sequelize, Sequelize) => {
    const Curriculum = sequelize.define("curriculums", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
      },
      progress: {
        type: Sequelize.INTEGER,
      }
    });
  
    return Curriculum;
  };