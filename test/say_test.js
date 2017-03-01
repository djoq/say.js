var chai, say, should;

chai = require('chai');

say = require('../say');

should = chai.should();

describe('Development environment', function() {
  return it('Prints verbosely', function(done) {
    say.dev("Successful print");
    typeof say.dev.should.be.a('Function');
    done();
  });
});

describe('Production environment', function() {
  return it('Silenced Output', function(done) {
    say.prod("You should not see this");
    typeof say.prod.should.be.a('Function');
    done();
  });
});

