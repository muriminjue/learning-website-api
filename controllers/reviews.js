const db = require("../models");


const get = async (req, res, next) => {
    var reviews = await db.Review.findAll({order: [['createdAt', 'DESC']]});
    res.send(reviews)

}



const reviews = {
    get: get,

}

module.exports = reviews;