module.exports = {
    logged(req, res, next) {
        if(req.isAuthenticated()){
            return next();
        }
        else{
            res.redirect('/login');
        }
    }
}