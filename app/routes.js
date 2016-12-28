module.exports = function(app) {
    // home
    app.use('/', require('./controllers/home'));
}