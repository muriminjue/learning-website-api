const db = require("../models");
const transporter = require("./configmail")

const email = async(req, res) =>{
    var mailOptions = {
      from: '"Rabbii Teecha" <no-reply@rabbii.co.ke>',
      to: req.body.email,
      subject: "Registration Successful",
      text: "We have received your registration information. We will get back to you soon",
      };
      console.log(mailOptions);
      // send mail with defined transport object
      await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          return console.log(error);
        }
        console.log("Message %s sent: %s", info.messageId, info.response);
        res.status(200).json({msg: "Registration was succesful"})
      });
}

const get = async (req, res) => {
    var tutors = await db.Tutor.findAll({order: [['createdAt', 'DESC']]});
    res.send(tutors)

}

const add = async (req, res, next) => {
    var tutor = await db.Tutor.findOne({ where: { email: req.body.email }})
    if (tutor) {
        res.status(400).json({ msg: "This Email Already Exists" });
      } else {
    
    await db.Tutor.create(req.body)
    //add email function
   next()
      }
}

const tutor = {
    get: get,
    add: add,
    email: email,

}

module.exports = tutor;