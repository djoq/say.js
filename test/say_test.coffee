chai = require('chai')
say = require('../say')
should = chai.should()

describe 'Development environment', ->
  it 'Prints verbosely', (done) ->
    say.dev "Successful print"
    typeof(say.dev).should.be.a 'Function'
    done() 
    return

describe 'Production environment', ->

  it 'Silenced Output', (done) ->
    say.prod "You should not see this"
    typeof(say.prod).should.be.a 'Function'
    done() 
    return