module.exports = (sequelize, Sequelize) => {
    const Languages = sequelize.define("languages", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
          },
          name: {
            type: Sequelize.STRING
          }
        });
    return Languages;
  };