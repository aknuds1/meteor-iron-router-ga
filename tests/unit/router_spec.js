require('should');
var fakeRouter = require('./lib/fake_router');
require('../../lib/router');

describe('router', function() {
    beforeEach(function() {
        fakeRouter.reset();
    });

    it('should allow a handler and options', function() {
        var optionsEvaluated = false;
        var handlerExecuted = false;
        Router.route('/', function () {
            handlerExecuted = true;
        }, {
            onRun: function() {
                optionsEvaluated = true;
                this.next();
            }
        });

        Router.executeRoute('/');

        optionsEvaluated.should.be.true;
        handlerExecuted.should.be.true;
    });
});
