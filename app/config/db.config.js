module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "root1",
    DB: "BLingual",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };