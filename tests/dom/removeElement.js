/**
 * Tests for dom/removeElement
 * @author Rob Taylor [manix84@gmail.com]
 * @requires dom/removeElement
 */
define([
    'dom/removeElement'
], function (removeElement) {
    module('dom');

    test('removeElement', function () {
        var spanElem = document.createElement('span');
        spanElem.setAttribute('id', 'test-span');
        document.getElementById('qunit-fixture').appendChild(spanElem);


        if ($('#qunit-fixture span#test-span').length === 1) {
            removeElement(spanElem);
            equal($('#qunit-fixture span#test-span').length, 0, 'The test span has been successfully removed from the element.');
            equal($('#test-span').length, 0, 'The test span has been successfully removed from the document.');
        } else {
            ok(false, 'The test-span failed to attach to the page.  Cannot complete the test.');
        }
    });
});
