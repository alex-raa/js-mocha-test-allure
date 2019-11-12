const mocha = require('mocha'); // required mocha
const chai = require('chai');   // required chai
// const assert = require('chai').assert;   // required chai.assert

const strReverse = require('../strReverse');   // require strReverse.js script
const strCheckType = require('../strCheckType');   // require strCheckType.js script

const expect = chai.expect;

describe('Several Strings Test', () => {
	// const testStep = allure.createStep("initial", () => {
	it('Checks if the strings is reversed 1 test', () => {
		let str = strReverse('Mocha is cool!!');
		expect(str).to.equal('!!looc si ahcoM');
	  });

	// it('Checks if the strings is reversed', () => {
	// 	testStep();
	// });

	it('Checks if the strings is reversed 2 test', () => {
		let str = strReverse('Chai is super supportive.');
		expect(str).to.equal('.evitroppus repus si iahC');

	});

	it('Checks if the string return type String 3 test', () => {
		let str = strCheckType('Chai is super supportive.');
		// expect(str).to.equal('string'); // можно использовать вариант ниже
		expect(str).to.be.a('string');
	});

});