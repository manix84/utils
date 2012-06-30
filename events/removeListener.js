/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/events/removeListener', function () {

    /**
     * Removes an event listener from a DOM Element.
     * @param {HTMLElement} attachTo - The object to attach the event listener to.
     * @param {String} name - The event name.
     */
    var removeListener = function (attachTo, eventName) {
        var callback = attachTo.prototype.events[eventName];
        if (!!callback) {
            if (attachTo.removeEventListener) {
                attachTo.removeEventListener(eventName, callback, false);
            } else if (attachTo.detachEvent) {
                attachTo.detachEvent('on' + eventName, callback);
            } else {
                attachTo['on' + eventName] = null;
            }
        } else {
            // console.warn('"' + eventName + '" not attached to specified element.', attachTo);
        }
    };

    return removeListener;
});
