/**
 * Tests for object/apply
 * @author Rob Taylor [manix84@gmail.com]
 * @requires object/apply
 */
define([
    'object/apply'
], function (apply) {
    module('object');

    test('apply', function () {
        deepEqual(apply({'cat': 'Felix', 'dog': 'Spot'}, {'dog': 'Rex', 'bird': 'Polly'}), {'cat': 'Felix', 'dog': 'Spot', 'bird': 'Polly'}, 'Apply should have merged the first object on to the second object.');
    });
});
