/* globals describe, it, afterEach */
const expect = require('chai').expect;
var version = require('../version');

describe('sarah-lib-utils/version', function() {
    it('hold two sarah version constant', function() {
        expect(version).to.have.property('v3');
        expect(version).to.have.property('v4');
    });

    it('return V3 if Config is not defined', function() {
        expect(version.isV3()).to.equal(true);
        expect(version.isV4()).to.equal(false);
        expect(version.get()).to.equal(version.v3);
    });

    it('return V4 if Config is defined', function() {
        // Fake Config
        global.Config = {};
        expect(version.isV3()).to.equal(false, 'isV3');
        expect(version.isV4()).to.equal(true, 'isV4');
        expect(version.get()).to.equal(version.v4, 'get');
    });

    afterEach(function() {
        delete global.Config;
    });
});
