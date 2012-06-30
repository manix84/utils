/**
 * @author Rob Taylor [manix84@gmail.com]
 */

define('utils/events/removeListener', function () {

    /**
     * Removes an event listener from a DOM Element.
     * @param {dom object} attachTo - The object to attach the event listener to.
     * @param {string} name - The event name.
     * @param {function} callback - The function to be called when the event fires.
     */
    var removeListener = function (attachTo, eventName, callback) {
        if (attachTo.removeEventListener) {
            attachTo.removeEventListener(eventName, callback, false);
        } else if (attachTo.detachEvent) {
            attachTo.detachEvent('on' + eventName, callback);
        } else {
            attachTo['on' + eventName] = null;
        }
    };

    return removeListener;
});
