/**
 * Tests for string/toObject
 * @author Rob Taylor [manix84@gmail.com]
 * @requires src/string/toObject
 */
define([
    'src/string/toObject'
], function (toObject) {
    module('string/toObject');

    test('toObject', function () {
        equal(toObject('{"1": "2"}'), {1: 2}, 'All Tags Should Be Stripped From The String.');
        equal(Object.prototype.toString.call(toObject('{"1": "2"}')), "[object Object]", 'All Tags Should Be Stripped From The String.');
    });
});
