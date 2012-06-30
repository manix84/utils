/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/events/removeListener', function () {

    /**
     * Removes an event listener from a DOM Element.
     * @param {HTMLElement} element - The element the event is attached too.
     * @param {String} name - The name of the event you wish to remove.
     * @param {Function} [callback] - Function you with to remove from the event.
     *                              If event.addListener is used to attach the listener, this param is not necessary.
     */
    var removeListener = function (element, eventName, callback) {
        callback = callback || element.prototype.events[eventName];
        if (!!callback) {
            if (element.removeEventListener) {
                element.removeEventListener(eventName, callback, false);
            } else if (element.detachEvent) {
                element.detachEvent('on' + eventName, callback);
            }
            element['on' + eventName] = null;
            element.prototype.events[eventName] = null;
        } else {
            // console.warn('"' + eventName + '" not attached to specified element.', element);
        }
    };

    return removeListener;
});
