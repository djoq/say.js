var chai, say, should;

chai = require('chai');

say = require('../say');

should = chai.should();

describe('Development environment', function() {
  return it('Prints verbosely', function(done) {
    say.dev("Unit tests complete");
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

describe('Prints in living color', () => {
  return it('fails not', (done) => {
    typeof say.dev('Compatibility tests complete').color.should.be.a('Function');
    done();
  });
});

describe('New color methods are compatible with legacy ', () => {
  return it('dont break', (done) => {
    typeof say.prod('anything').color.should.be.a('Function');
    done();
  });
});
