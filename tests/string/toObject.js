/**
 * Tests for string/toObject
 * @author Rob Taylor [manix84@gmail.com]
 * @requires string/toObject
 */
define([
    'string/toObject'
], function (toObject) {
    module('string/toObject');

    test('toObject', function () {
        equal(Object.prototype.toString.call(toObject('{"1": "2"}')), "[object Object]", 'String should be converted to a valid object.');
        equal(toObject('{"1": "2"}'), {"1": "2"}, 'String should be converted an object that matches the original string.');
    });
});
