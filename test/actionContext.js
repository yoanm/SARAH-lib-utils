/* globals describe, it, afterEach */
const expect = require('chai').expect;
const SarahActionContext = require('../actionContext');

describe('sarah.lib.utils/actionContext', function() {
    it('hold context data and callback', function() {
        var data = {myData: 'myValue'};
        var callback = function myCallback() {};
        var context = new SarahActionContext(data, callback);

        expect(context.getCallback()).to.equal(callback);
        expect(context.getData()).to.equal(data);
    });
    it('have setter for SARAH v3', function() {
        var data = {myData: 'myValue'};
        var callback = function myCallback() {};
        var SARAH = {sarahV3: 'sarahV3'};
        var context = new SarahActionContext(data, callback);
        context.setSARAH(SARAH);
        expect(context.getSARAH()).to.deep.equal(SARAH);
    });
    it('use global SARAH instance for SARAH v4', function() {
        var data = {myData: 'myValue'};
        var callback = function myCallback() {};
        global.SARAH = {sarahV4: 'sarahV4'};
        var context = new SarahActionContext(data, callback);
        expect(context.getSARAH()).to.deep.equal(global.SARAH);
    });

    afterEach(function() {
        delete global.SARAH;
    });
});
