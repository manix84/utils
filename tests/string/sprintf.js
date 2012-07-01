/**
 * Tests for string/sprintf
 * @author Rob Taylor [manix84@gmail.com]
 * @requires src/string/sprintf
 */
define([
    'src/string/sprintf'
], function (sprintf) {
    module('string/sprintf');

    test('sprintf', function () {
        equal(sprintf("Integer: %d, String: %s, Float: %f", ["String", 1.2, 3]), "Integer: 3, String: String, Float: 1.2", "SprintF Has Replaced The Special Characters");
    });
});
