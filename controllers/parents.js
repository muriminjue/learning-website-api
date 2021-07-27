const db = require("../models");
const transporter = require("./configmail")



const add = async (req, res, next) => {
    var parent = await db.Parent.findOne({ where: { email: req.body.email }})
    if (parent) {
        res.status(400).json({ msg: "This Email Already Exists" });
      } else {
    
    await db.Parent.create(req.body)
    //add email function
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
}

const get = async (req, res) => {
    var parents = await db.Parent.findAll({order: [['createdAt', 'DESC']]});
    res.send(parents)

}

const parent = {
add:add
}

module.exports = parent