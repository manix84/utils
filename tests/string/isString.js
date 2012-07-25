/**
 * Tests for string/isString
 * @author Rob Taylor [manix84@gmail.com]
 * @requires string/isString
 */
define([
    'string/isString'
], function (isString) {
    module('string');

    test('isString', function () {
        equal(isString("A String"), true, 'Is A Native String');
        equal(isString(String("A String")), true, 'Is A String Object');
        equal(isString({"name": "A String"}), false, 'Is An Object With A String Inside');
        equal(isString(["A String"]), false, 'Is An Array With A String Inside');
    });
});
