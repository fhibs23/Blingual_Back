module.exports = (sequelize, Sequelize) => {
    const Vocabulary = sequelize.define("vocabylaries", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      wordsList: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      }
    });
  
    return Vocabulary;
  };