/**
 * Tests for style/vendorSupport
 * @author Rob Taylor [manix84@gmail.com]
 * @module tests/style/vendorSupport
 * @requires style/vendorSupport
 */
define('tests/vendorSupport', [
    'style/vendorSupport'
], function (vendorSupport) {
    module('style');

    test('vendorSupport', function () {
        notEqual(vendorSupport('borderRadius'), undefined, 'Support.Property should return in a boolean when used');
        notEqual(vendorSupport('textShadow'), undefined, 'Support.Property should return in a boolean when used');
    });


});
