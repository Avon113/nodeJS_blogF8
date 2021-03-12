const Comic = require('../models/Comic');
const { mongooseToObject } = require('../../util/mongoose');

class ComicController {
    //[GET] /
    show(req, res, next) {
        Comic.findOne({ slug: req.params.slug })
            .then(comic =>{
                res.render('comics/show', { 
                    comic: mongooseToObject(comic)
                });
            })
            .catch(next);
    }

    //[POST] /comics/create
    create(req, res, next) {
        res.render('comics/create');
    }

    //[POST] /comics/store 
    store(req, res, next) {
        const formData = req.body;
        formData.image = `http://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const comic = new Comic(formData);
        comic.save()
            .then(() => res.redirect(`/`))
            .catch(error => {
                
            })
    }


}

module.exports = new ComicController();