/**
 * Tests for event/addListener
 * @author Rob Taylor [manix84@gmail.com]
 * @requires event/addListener
 */
define([
    'events/addListener'
], function (addListener) {
    module('events');

    var linkElem = document.createElement('a');
    linkElem.setAttribute('href', '#failed');
    linkElem.innerText = ('test');
    document.getElementById('qunit-fixture').appendChild(linkElem);

    asyncTest('addListener', function () {

        var failEventTest = window.setTimeout(function () {
            ok(false, 'Click event failed.');
            start();
        }, 100);

        addListener(linkElem, 'click', function (event) {
            window.clearTimeout(failEventTest);
            ok(true, 'Click event heard on test element.');
            start();
        });

        ok(!!linkElem.eventStore.click, 'EventStore has "click" event stored.');

        linkElem.click();
    });
});
