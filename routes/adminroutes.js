// import modules
const express = require("express");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const upload = multer();
const admin = require("../controllers/admin")



const router = express.Router();
//import fucntions and controllers
const db = require("../models");
const salt = 8;

router.get('/', admin.pass, (req, res) => {

    res.render("dashboard")
})


//FAQs 
router.get("/faqs",  admin.pass, async (req,res) => {
        var faqs = await db.Faq.findAll({order: [['updatedAt', 'DESC']]});
        res.render("faqs", {faqs:faqs})
    
});

router.get("/addfaqs", admin.pass, (req, res) => {
    res.render("addfaqs")
});

router.post("/addfaqs", admin.pass,  async (req, res) => {
    await db.Faq.create(req.body)
    res.redirect("/faqs")
})

router.delete('/faqs/:id', admin.pass, async (req, res) => {
    await db.Faq.destroy({ where: {id: req.params.id}})
    res.redirect("/faqs")
})

router.get('/faqedit/:id',  admin.pass, async (req, res) => {
    var faq = await db.Faq.findByPk(req.params.id);
    res.render("editfaqs", {faq: faq})
})

router.put('/faqedit/:id',  admin.pass, async (req, res) => {
    await  db.Faq.update(
        req.body,
        {
          where: {
            id: req.params.id,
          },
        }
      );
    res.redirect("/faqs")
 } )

//Tutors
router.get("/tutors",  admin.pass, async (req,res) => {
    var tutors = await db.Tutor.findAll({order: [['createdAt', 'DESC']]})
    res.render("tutors", {tutors: tutors})
})

router.get("/parents",  admin.pass, async (req,res) => {
    var parents = await db.Parent.findAll({order: [['createdAt', 'DESC']]})
    res.render("parents", {parents: parents})
})

router.get("/login",admin.forward, (req, res)=> {
    res.render("login")
});
router.get("/addadmin", admin.pass,  (req, res)=> {
    res.render("addadmin")
})


router.post("/register",  admin.pass,  upload.single("file"), async(req,res) => {
    const {
        file,
        body: { name },
    } = req;

    if (
        file.mimetype == "image/jpeg" ||
        file.mimetype == "image/png" ||
        file.mimetype == "image/jpg"
    ){
        const newadmin = { 
            firstname:req.body.firstname,
            lastname:  req.body.lastname,
            email: req.body.email,
            password: await  bcrypt.hash(req.body.password, salt),
            image: file.originalname
            }
            console.log(newadmin);
            var upload = multer({ storage: "public/images/" })
   
    var admin = await db.Admin.findOne({ where: { email: newadmin.email }})
    if (!newadmin.password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
      }
    if (admin) {
        return res.status(400).json({ msg: 'user exists' });
      } 
    await db.Admin.create(newadmin);
        res.status(200).redirect("/admin")
    } else {
        res.status(400).json({msg:"invalid image"});
        
    }
})

router.post("/login", async (req,res) => {
	var username = req.body.username;
	var password = req.body.password;
 
	if (username && password) {
        var admin = await db.Admin.findOne({ where: { email: username }})
       
        if (admin){
            var result = await bcrypt.compare(password, admin.password)
           
        if (result) {
            
				req.session.loggedin = true;
				req.session.user= admin;
                console.log(req.session)
				res.redirect('/');
            } else {
                res.json({msg: 'incorrect password!'});
            
			}
        } else {
				res.json({msg: 'user does not exist!'});
			}			
			
		
	} else {
		res.send({msg:'Please enter Username and Password!'});
		
	}
})

router.post('/logout',(req,res) => {
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;
