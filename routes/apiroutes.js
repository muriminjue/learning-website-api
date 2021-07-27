// import modules
const express = require("express");
const router = express.Router();
const cors = require("cors");

//import fucntions and controllers
const faqs = require("../controllers/faqs");
const tutor = require("../controllers/tutors");
const parent = require("../controllers/parents");

router.use(cors());
//FAQs 
router.get("/faqs", faqs.get);

//Tutors
//router.get("/tutors", tutor.get)
router.post("/tutors", tutor.add, tutor.email)

//parents
router.post("/parents", parent.add)



module.exports = router;
