const Comic = require('../models/Comic');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    //[GET] /
    index(req, res, next) {
        Comic.find({})
            .then(comics => {
                res.render('home', {
                    comics: multipleMongooseToObject(comics)
                });
            })
            .catch(next);
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
