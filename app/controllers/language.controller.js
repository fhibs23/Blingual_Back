const db = require("../models");
const config = require("../config/auth.config");
const { language } = require("../models");
const User = db.user;
const Language=db.language;
const userProgress=db.userProgress;

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
            if (user.hasLanguage(language)){
              res.send({ message: "Language already exists!" });
            }else{
            user.addLanguages(language).then(() => {
              res.send({ message: "Language is added!" });
            });
          }
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
       

    //   }).then(user => {
    //     if (req.body.language) {
    //       Language.findAll({
    //         where: {
    //           name:  req.body.language,
              
    //         }
    //       }).then(language => {
            
    //         user.addLanguage(language).then(() => {
    //           // console.log(language.getDataValue("id"))
    //           // const userProgr = {
    //           //   streak:0,
    //           //   userId:user.get("id")
    //           // };
    //           // console.log(userProgr)
    //           // userProgress.create(userProgr)
    //           // userProgress.setLanguage(language).then(() => {
    //           console.log("Add")
    //           res.status(200).send({ message: "" });
    //           });
    //         // });
    //      // }
    //       });
    //     } else {
    //       console.log("No")
    //     }
    //   })
    // }catch(err) {
    //     console.log(err)
    //     res.status(500).send({ message: err.message });
