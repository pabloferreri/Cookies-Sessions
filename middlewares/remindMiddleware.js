function remindMiddleware(req,res,next) {
    next()

    if (req.cookies.favoriteColor != undefined && req.session.color != undefined) {
        return req.session.color = req.cookies.favoriteColor
    }
}

module.exports = remindMiddleware;