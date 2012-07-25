/**
 * Tests for accessibility/alert
 * @author Rob Taylor [manix84@gmail.com]
 * @requires accessibility/alert
 */
define([
    'accessibility/alert'
], function (accessibilityAlert) {
    module('accessibility');

    asyncTest('alert', function () {
        accessibilityAlert("A String");

        equal($('html>h3[role="alert"]').length, 1, 'Accessibility alert has successfully attached to the page.');

        window.setTimeout(function () {
            equal($('html>h3[role="alert"]').length, 0, 'Accessibility alert has successfully detached from the page.');
            start();
        }, 1000);
    });
});
