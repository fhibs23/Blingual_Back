module.exports = (sequelize, Sequelize) => {
    const Language = sequelize.define("language", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
          },
          name: {
            type: Sequelize.STRING
          }
        });
    return Language;
  };