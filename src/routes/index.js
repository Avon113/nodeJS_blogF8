const newsRouter = require('./news');
const comicRouter = require('./comic');
const siteRouter = require('./site');

function route(app) {
    app.use('/comics', comicRouter);

    app.use('/news', newsRouter);

    app.use('/', siteRouter);
}

module.exports = route;
