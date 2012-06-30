/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/events/addListener', function () {

    /**
     * Adds an event listener to a DOM Element.
     * @param {HTMLElement} attachTo - The object to attach the event listener to.
     * @param {String} name - The event name.
     * @param {Function} callback - The function to be called when the event fires.
     */
    var addListener = function (attachTo, eventName, callback) {
        if (typeof attachTo.addEventListener === 'function') {
            attachTo.addEventListener(eventName, callback, false);
        } else if (!!attachTo.attachEvent) {
            attachTo.attachEvent('on' + eventName, callback);
        } else {
            attachTo['on' + eventName] = callback;
        }
        attachTo.prototype.events[eventName] = callback;
    };

    return addListener;
});
