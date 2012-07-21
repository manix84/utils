/**
 * Tests for string/isString
 * @author Rob Taylor [manix84@gmail.com]
 * @requires src/string/isString
 */
define([
    'src/string/isString'
], function (isString) {
    module('string/isString');

    test('isString', function () {
        equal(isString("A String"), true, 'Is A Native String');
        equal(isString(String("A String")), true, 'Is A String Object');
        equal(isString({"name": "A String"}), false, 'Is An Object With A String Inside');
        equal(isString(["A String"]), false, 'Is An Array With A String Inside');
    });
});
