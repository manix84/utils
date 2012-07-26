/**
 * Tests for event/addListener
 * @author Rob Taylor [manix84@gmail.com]
 * @requires event/addListener
 */
define([
    'events/trigger',
    'events/addListener'
], function (trigger, addListener) {
    module('events');

    var linkElem = document.createElement('a');
    linkElem.innerText = ('test');
    document.getElementById('qunit-fixture').appendChild(linkElem);

    asyncTest('trigger', function () {

        var removeEventTest = window.setTimeout(function () {
            ok(false, 'Click event failed.');
            start();
        }, 100);

        addListener(linkElem, 'click', function (event) {
            console.log('args', arguments);
            window.clearTimeout(removeEventTest);
            ok(true, 'Click event heard on test element.');
            equal(event.testProperty, 'a String', 'Object returned contained "a String" as expected');
            start();
        });
        trigger(linkElem, 'click', {
            testProperty: 'a String'
        });
    });
});
