const db = require("../models");


const get = async (req, res, next) => {
    var faqs = await db.Faq.findAll({order: [['createdAt', 'DESC']]});
    res.send(faqs)

}



const faqs = {
    get: get,

}

module.exports = faqs;