module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {

        username: {
            type: Sequelize.STRING,
            get() {
                return this.getDataValue(username);
                
              }
        },
        email: {
            type: Sequelize.STRING,
            get() {
                return this.getDataValue(email);
              }
        },
        password: {
            type: Sequelize.STRING,
            get() {
                return  this.getDataValue(password)
              }
        },
        city: {
            type: Sequelize.STRING,
            get() {
                return this.getDataValue(city)
            },
            set(value) {
                this.setDataValue('city', value);
            }
        },
        info: {
            type: Sequelize.STRING,
            get() {
                return this.getDataValue(info)
            },
            set(value) {
                this.setDataValue('info', value);
            }
        }
        });
    return User;
  };