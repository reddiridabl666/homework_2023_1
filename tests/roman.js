'use strict';

QUnit.module('Тестируем функцию roman', function () {
	QUnit.test('roman правильно переводит из римской системы счисления', function (assert) {
		assert.strictEqual(roman('I'), 1);
		assert.strictEqual(roman('V'), 5);
		assert.strictEqual(roman('M'), 1000);
		assert.strictEqual(roman('l'), 50);
		assert.strictEqual(roman('d'), 500);

		assert.strictEqual(roman('iv'), 4);
		assert.strictEqual(roman('iiii'), 4);
		assert.strictEqual(roman('CM'), 900);

		assert.strictEqual(roman('MCMIV'), 1904);
		assert.strictEqual(roman('MCMXC'), 1990);
		assert.strictEqual(roman('mmxvii'), 2017);
	});

	QUnit.test('roman правильно переводит из десятичной системы счисления', function (assert) {
		assert.strictEqual(roman(1), 'I');
		assert.strictEqual(roman(5), 'V');
		assert.strictEqual(roman(1000), 'M');
		assert.strictEqual(roman(50), 'L');
		assert.strictEqual(roman(500), 'D');

		assert.strictEqual(roman(4), 'IV');
		assert.strictEqual(roman(900), 'CM');

		assert.strictEqual(roman(1904), 'MCMIV');
		assert.strictEqual(roman(1990), 'MCMXC');
		assert.strictEqual(roman(2017), 'MMXVII');
	});

	QUnit.test('roman правильно определяет, что было передано на вход', function (assert) {
		assert.strictEqual(roman('1904'), 'MCMIV');
		assert.strictEqual(roman('1990'), 'MCMXC');
		assert.strictEqual(roman('2017'), 'MMXVII');
		assert.strictEqual(roman(new String('CXXIII')), 123);
		assert.strictEqual(roman(new String('123')), 'CXXIII');
		assert.strictEqual(roman(new Number(123)), 'CXXIII');
	});

	QUnit.test('roman возвращает NaN при некорректных входных данных', function (assert) {
		assert.ok(Number.isNaN(roman('-15')));
		assert.ok(Number.isNaN(roman(4000)));
		assert.ok(Number.isNaN(roman('BMVII')));
		assert.ok(Number.isNaN(roman('CMTXL')));
		assert.ok(Number.isNaN(roman(Infinity)));
		assert.ok(Number.isNaN(roman(-Infinity)));
	});

	QUnit.test('roman возвращает NaN при некорректных типах входных данных', function (assert) {
		assert.ok(Number.isNaN(roman([1, 2, 3])));
		assert.ok(Number.isNaN(roman(null)));
		assert.ok(Number.isNaN(roman(undefined)));
		assert.ok(Number.isNaN(roman(NaN)));
		assert.ok(Number.isNaN(roman({})));
		assert.ok(Number.isNaN(roman(true)));
	});
});
