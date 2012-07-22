/**
 * Tests for string/sprintf
 * @author Rob Taylor [manix84@gmail.com]
 * @requires string/sprintf
 */
define([
    'string/sprintf'
], function (sprintf) {
    module('string/sprintf');

    test('sprintf', function () {
        equal(sprintf("Integer: %d, String: %s, Not A Float: \\%f, Float: %f", ["String", 1.2, 3]), "Integer: 3, String: String Not A Float: \\%f, Float: 1.2", "SprintF Has Replaced The Special Characters");
    });
});
