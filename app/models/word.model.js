module.exports = (sequelize, Sequelize) => {
    const Word = sequelize.define("words", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      word: {
        type: Sequelize.STRING
      },
      transcription: {
        type: Sequelize.STRING
      },
      translation: {
        type: Sequelize.STRING
      },
      examples: {
        type: Sequelize.STRING
      }
    });
  
    return Word;
  };