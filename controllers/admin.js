

const pass = (req,res, next) => {
if(req.session.user) {
    next()
}else {
    res.redirect("/login")
}
}

const forward = (req, res, next) => {
    if(req.session.user) {
        res.redirect("/")
    }next()

}

const admin ={
    pass: pass,
    forward: forward
}

module.exports = admin