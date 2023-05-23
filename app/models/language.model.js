module.exports = (sequelize, Sequelize) => {
    const Language = sequelize.define("language", {
          name: {
            type: Sequelize.STRING,
            get() {
              const name = this.getDataValue(name);
              return name
          },
          }
        });
    return Language;
  };