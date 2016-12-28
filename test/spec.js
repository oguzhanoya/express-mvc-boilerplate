// production environment
process.env.NODE_ENV = "production";

var app = require('../app');
var request = require('supertest')(app);

describe('Example unit test', function() {

    before(function(done) {
        app.on('appStarted', function() {
            done();
        });
    });

    it('should return 404 page', function(done) {
        request
            .get('/random-url')
            .expect(404, done);
    });

    it('should return home page', function(done) {
        request
            .get('/')
            .expect(200, done);
    });

});