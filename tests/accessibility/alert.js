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
        if (!!$('html>h3[role="hello"]')) {
            ok(true, 'Accessibility alert has successfully attached to the page.');
        } else {
            ok(false, 'Accessibility alert has failed to attach to the page.');
        }
        window.setTimeout(function () {
            if (!$('html>h3[role="hello"]')) {
                ok(true, 'Accessibility alert has successfully detached from the page.');
            } else {
                ok(false, 'Accessibility alert has failed to detach from the page.');
            }
            start();
        }, 1000);
    });
});
