/* globals describe, it, beforeEach */
var chai = require("chai");
var sinon = require("sinon");
const SarahLogger = require('../logger');

var expect = chai.expect;

var debug = global.debug = sinon.spy();
var log = global.log = sinon.spy();
var info = global.info = sinon.spy();
var warn = global.warn = sinon.spy();
var error = global.error = sinon.spy();

var logger;
var loggerChannel = 'myChannel';
var message = 'myMessage';
var expectedMessage = '[' + loggerChannel + '] ' + message;

describe('sarah.lib.utils/logger', function() {
    beforeEach(function() {
        logger = new SarahLogger(loggerChannel);
    });

    it('add channel on debug', function() {
        logger.debug(message);
        expect(debug.calledOnce).to.equal(true);
        expect(debug.calledWithExactly(expectedMessage)).to.equal(true);
    });

    it('add channel on log', function() {
        logger.log(message);
        expect(log.calledOnce).to.equal(true);
        expect(log.calledWithExactly(expectedMessage)).to.equal(true);
    });

    it('add channel on info', function() {
        logger.info(message);
        expect(info.calledOnce).to.equal(true);
        expect(info.calledWithExactly(expectedMessage)).to.equal(true);
    });

    it('add channel on warn', function() {
        logger.warn(message);
        expect(warn.calledOnce).to.equal(true);
        expect(warn.calledWithExactly(expectedMessage)).to.equal(true);
    });

    it('add channel on error', function() {
        logger.error(message);
        expect(error.calledOnce).to.equal(true);
        expect(error.calledWithExactly(expectedMessage)).to.equal(true);
    });
});
