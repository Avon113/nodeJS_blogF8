const express = require('express');
const router =  express.Router();

const comicController = require('../app/controllers/ComicController');

router.get('/create', comicController.create);
router.post('/store',comicController.store);
router.get('/:slug', comicController.show);

module.exports = router;