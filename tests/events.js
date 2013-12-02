/*globals asyncTest, module, ok, start, equal */
/**
 * Tests for event/eventListener.add
 * @author Rob Taylor [manix84@gmail.com]
 * @requires events
 */
define([
    "events"
], function (eventListener) {
    module("eventListener");


    asyncTest("eventListener.add", function () {
        var failEventTest = window.setTimeout(function () {
                ok(false, "Click event failed.");
                start();
            }, 100),
            linkElem = document.createElement("a");

        linkElem.setAttribute("href", "#failed");
        linkElem.innerText = ("test");
        document.getElementById("qunit-fixture").appendChild(linkElem);

        eventListener.add(linkElem, "click", function (event) {
            event.preventDefault();
            window.clearTimeout(failEventTest);
            ok(true, "Click event heard on test element.");
            start();
        });

        ok(!!linkElem.eventStore.click, "EventStore has \"click\" event stored.");

        linkElem.click();

        if (linkElem) {
            document.getElementById("qunit-fixture").removeChild(linkElem);
        }
    });
    module("events");


    asyncTest("eventListener.remove", function () {
        var removeEventTest = window.setTimeout(function () {
                ok(true, "Click event was not heard - Success.");
                start();
            }, 100),
            linkElem = document.createElement("a");

        linkElem.setAttribute("href", "#failed");
        linkElem.innerText = ("test");
        document.getElementById("qunit-fixture").appendChild(linkElem);

        eventListener.add(linkElem, "click", function () {
            window.clearTimeout(removeEventTest);
            ok(false, "Click event heard on test element - Fail.");
            start();
        });
        eventListener.remove(linkElem, "click");

        linkElem.click();

        if (linkElem) {
            document.getElementById("qunit-fixture").removeChild(linkElem);
        }
    });


    asyncTest("trigger", function () {
        var removeEventTest = window.setTimeout(function () {
                ok(false, "Click event failed.");
                start();
            }, 100),
            linkElem = document.createElement("a");

        linkElem.setAttribute("href", "#failed");
        linkElem.innerText = ("test");
        document.getElementById("qunit-fixture").appendChild(linkElem);

        eventListener.add(linkElem, "click", function (event) {
            window.clearTimeout(removeEventTest);
            ok(true, "Click event heard on test element.");
            equal(event.testProperty, "a String", "Object returned contained \"a String\" as expected");
            start();
        });
        eventListener.trigger(linkElem, "click", {
            testProperty: "a String"
        });

        if (linkElem) {
            document.getElementById("qunit-fixture").removeChild(linkElem);
        }
    });


});
