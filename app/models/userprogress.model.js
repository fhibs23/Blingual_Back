module.exports = (sequelize, Sequelize) => {
    const UserProgress = sequelize.define("usersprogress", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      streak: {
        type: Sequelize.INTEGER,
      }
    });
  
    return UserProgress;
  };