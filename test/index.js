/* globals describe, it */
const expect = require('chai').expect;
var proxyquire = require('proxyquire').noPreserveCache();
var sarahActionContextMock = {sarahActionContextMock: 'sarahActionContextMock'};
var sarahActionHelperMock = {sarahActionHelperMock: 'sarahActionHelperMock'};
var sarahLoggerMock = {sarahLoggerMock: 'sarahLoggerMock'};
var sarahVersionMock = {sarahVersionMock: 'sarahVersionMock'};
var libUtils = proxyquire(
    '../index',
    {
        './actionContext': sarahActionContextMock,
        './actionHelper': sarahActionHelperMock,
        './logger': sarahLoggerMock,
        './version': sarahVersionMock
    }
);
describe('sarah.lib.utils', function() {
    it('hold class definition', function() {
        expect(libUtils).to.have.property('SarahActionContext');
        expect(libUtils.SarahActionContext).to.deep.equal(sarahActionContextMock);
        expect(libUtils).to.have.property('SarahActionHelper');
        expect(libUtils.SarahActionHelper).to.deep.equal(sarahActionHelperMock);
        expect(libUtils).to.have.property('SarahLogger');
        expect(libUtils.SarahLogger).to.deep.equal(sarahLoggerMock);
    });

    it('hold a version helper object', function() {
        expect(libUtils).to.have.property('version');
        expect(libUtils.version).to.deep.equal(sarahVersionMock);
    });
});
