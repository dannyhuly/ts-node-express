/// <reference path="./../../../typings/index.d.ts" />

import { expect } from 'chai';
import { Calculator } from './../../../app/service/calculator/calculator.service'


describe('calculator.service', () => {

	var calculator: Calculator;

	beforeEach(() => {
		calculator = new Calculator();
	})

	it('test', () => {

		var addRes = calculator.add(1,2);
		expect(1).to.equal(1);

	});

	it('should add', () => {

		var addRes = calculator.add(1,2);
		expect(addRes).to.equal(3);

	});

});