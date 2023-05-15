const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.language = require("../models/language.model")(sequelize,Sequelize);
db.curriculum=require("../models/curriculum.model")(sequelize,Sequelize);
db.lesson=require("../models/lesson.model")(sequelize,Sequelize);
db.task=require("../models/task.model")(sequelize,Sequelize);
db.lessonProgress=require("../models/lessonProgress.model")(sequelize,Sequelize);
db.userProgress=require("../models/userprogress.model")(sequelize,Sequelize);
db.word=require("../models/word.model")(sequelize,Sequelize);
db.vocabulary=require("../models/vocabulary.model")(sequelize,Sequelize);
db.theory=require("../models/theory.model")(sequelize,Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.vocabulary.belongsToMany(db.word, {
  through: "vocabulary_words",
  foreignKey: "vocabularyId",
  otherKey: "wordId"
});
db.word.belongsToMany(db.vocabulary, {
  through: "vocabulary_words",
  foreignKey: "wordId",
  otherKey: "vocabularyId"
});

db.language.belongsToMany(db.user, {
  through: "user_language",
  foreignKey: "languageId",
  otherKey: "userId"
});
db.user.belongsToMany(db.language, {
  through: "user_language",
  foreignKey: "userId",
  otherKey: "languageId"
});

db.lesson.belongsToMany(db.theory, {
  through: "lesson_theory",
  foreignKey: "lessonId",
  otherKey: "theoryId"
});
db.theory.belongsToMany(db.lesson, {
  through: "lesson_theory",
  foreignKey: "theoryId",
  otherKey: "lessonId"
});


db.language.hasMany(db.theory, { as: "theories" });
db.theory.belongsTo(db.language, {
  foreignKey: "languageId",
  as: "language",
});

db.language.hasMany(db.word, { as: "words" });
db.word.belongsTo(db.language, {
  foreignKey: "languageId",
  as: "language",
});

db.user.hasMany(db.vocabulary, { as: "vocabularies" });
db.vocabulary.belongsTo(db.user, {
  foreignKey: "userId",
  as: "user",
});

db.language.hasMany(db.userProgress, { as: "usersprogress" });
db.userProgress.belongsTo(db.language, {
  foreignKey: "languageId",
  as: "language",
});

db.user.hasMany(db.userProgress, { as: "usersprogress" });
db.userProgress.belongsTo(db.user, {
  foreignKey: "userId",
  as: "user",
});

db.userProgress.hasMany(db.curriculum, { as: "curriculums" });
db.curriculum.belongsTo(db.userProgress, {
  foreignKey: "userProgressId",
  as: "userProgress",
});

db.curriculum.hasMany(db.lesson, { as: "lessons" });
db.lesson.belongsTo(db.curriculum, {
  foreignKey: "curriculumId",
  as: "curriculum",
});

db.lesson.hasMany(db.task, { as: "tasks" });
db.task.belongsTo(db.lesson, {
  foreignKey: "lessonId",
  as: "lesson",
});

db.lesson.hasMany(db.lessonProgress, { as: "lessonProgress" });
db.lessonProgress.belongsTo(db.lesson, {
  foreignKey: "lessonId",
  as: "lesson",
});

//db.ROLES = ["user", "admin", "moderator"];

module.exports = db;