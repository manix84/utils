/**
 * Tests for event/addListener
 * @author Rob Taylor [manix84@gmail.com]
 * @requires event/addListener
 */
define([
    'events/removeListener',
    'events/addListener'
], function (removeListener, addListener) {
    module('events');

    var linkElem = document.createElement('a');
    linkElem.innerText = ('test');
    document.getElementById('qunit-fixture').appendChild(linkElem);

    asyncTest('removeListener', function () {

        var removeEventTest = window.setTimeout(function () {
            ok(true, 'Click event was not heard - Success.');
            start();
        }, 100);

        addListener(linkElem, 'click', function (event) {
            window.clearTimeout(removeEventTest);
            ok(false, 'Click event heard on test element - Fail.');
            start();
        });
        removeListener(linkElem, 'click');

        linkElem.click();
    });
});
