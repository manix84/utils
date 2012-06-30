/**
 * @author Rob Taylor [manix84@gmail.com]
 */

define('utils/events/addListener', function () {

    /**
     * Adds an event listener to a DOM Element.
     * @param {dom object} attachTo - The object to attach the event listener to.
     * @param {string} name - The event name.
     * @param {function} callback - The function to be called when the event fires.
     */
    var addListener = function (attachTo, eventName, callback) {
        if (typeof attachTo.addEventListener === 'function') {
            attachTo.addEventListener(eventName, callback, false);
        }
        if (!!attachTo.attachEvent) {
            attachTo.attachEvent('on' + eventName, callback);
        }
        attachTo['on' + eventName] = callback;
    };

    return addListener;
});
