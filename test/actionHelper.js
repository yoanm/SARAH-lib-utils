/* globals describe, it, beforeEach */
var chai = require("chai");
var sinon = require("sinon");
var proxyquire = require('proxyquire').noPreserveCache();

const SarahActionContext = require('../actionContext');

var expect = chai.expect;

var SarahActionHelper;
var version;
var context;
var helper;

describe('sarah-lib-utils/actionHelper', function() {
    beforeEach(function() {
        context = sinon.createStubInstance(SarahActionContext);
        version = require('../version');
        SarahActionHelper = proxyquire(
            '../actionHelper',
            {
                './version': version
            }
        );
        helper = new SarahActionHelper(context);
    });

    it('can return action context', function() {
        expect(helper.getContext()).to.deep.equal(context);
    });

    it('can speak on SARAH v3', function() {
        var callback = sinon.spy();
        var speak = sinon.spy();
        var SARAH = {
            speak: speak
        };
        var tts = 'plop';
        var versionIsV3Stub = sinon.stub(version, 'isV3');

        versionIsV3Stub.returns(true);
        context.getCallback.returns(callback);
        context.getSARAH.returns(SARAH);

        helper.speak(tts);

        expect(versionIsV3Stub.called).to.equal(true);
        expect(context.getCallback.called).to.equal(true);
        expect(callback.calledWith({tts: tts})).to.equal(true);
        expect(callback.calledOnce).to.equal(true);
        expect(speak.calledWith(tts)).to.equal(false);
    });

    it('can speak on SARAH v4', function() {
        var callback = sinon.spy();
        var speak = sinon.spy();
        var SARAH = {
            speak: speak
        };
        var tts = 'plop';
        var versionIsV3Stub = sinon.stub(version, 'isV3');

        versionIsV3Stub.returns(false);
        context.getCallback.returns(callback);
        context.getSARAH.returns(SARAH);

        helper.speak(tts);

        expect(versionIsV3Stub.called).to.equal(true);
        expect(context.getCallback.called).to.equal(true);
        expect(callback.calledOnce).to.equal(true);
        expect(callback.calledWithExactly()).to.equal(true);
        expect(callback.calledWith({tts: tts})).to.equal(false);
        expect(speak.calledOnce).to.equal(true);
        expect(speak.calledWith(tts)).to.equal(true);
    });
});
