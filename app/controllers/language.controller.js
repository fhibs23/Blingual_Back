const db = require("../models");
const config = require("../config/auth.config");
const { language } = require("../models");
const User = db.user;
const Language=db.language;

const Op = db.Sequelize.Op;

exports.addLang=async(req,res)=>{
    try{
    // if (!req.body.title) {
    //   res.status(400).send({
    //     message: "Content can not be empty!"
    //   });
    //   return;
    // }
    const user = await User.findOne({
        where: {
          username: req.body.username
        }
      }).then(user => {
        
        if (req.body.language) {
          Language.findAll({
            where: {
              name:  req.body.language
              
            }
          }).then(language => {
            user.setLanguages(language).then(() => {
              res.send({ message: "Пользователь зарегистрирован!" });
            });
          });
        } else {
          console.log("No")
        }
      })
    }catch(err) {
        console.log(err)
        res.status(500).send({ message: err.message });
    //   });
    //   .then(user => {
    //     if (user){
    //         console.log('POLZ EST!')
    //     }

    //     if(req.body.language){
    //       Language.findAll({
    //         where: {
    //           name: {
    //             [Op.or]: req.body.language
    //           }
    //         }
    //       }).then(languages => {
    //         console.log(languages);
    //         user.setLanguages(languages).then(() => {
    //             res.status(200).send({
    //                 // id: user.id,
    //                 // username: user.username,
    //                 // email: user.email,
    //                 // roles: authorities,
    //                 // accessToken: token
    //               });
    //         });
    //       });
    //     }else{console.log("SHIT")}
    //     })
    //     .catch(err => {
    //         res.status(500).send({ message: err.message });
     }
  }