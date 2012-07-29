/**
 * Tests for object/compare
 * @author Rob Taylor [manix84@gmail.com]
 * @requires object/compare
 */
define([
    'object/compare'
], function (compare) {
    module('object');

    test('compare', function () {
        deepEqual(compare({'cat': 'Felix', 'dog': 'Spot'}, {'dog': 'Rex', 'bird': 'Polly'}), false, 'Objects don\'t match.');
        deepEqual(compare({'cat': 'Felix', 'dog': 'Spot'}, {'cat': 'Felix', 'dog': 'Spot'}), true, 'Objects match.');
    });
});
