/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/events/addListener', function () {

    /**
     * Adds an event listener to a DOM Element.
     * @param {HTMLElement} element - The object to attach the event listener to.
     * @param {String} name - The event name.
     * @param {Function} callback - The function to be called when the event fires.
     */
    var addListener = function (element, eventName, callback) {
        element.eventStore = element.eventStore || {};

        if (typeof element.addEventListener === 'function') {
            element.addEventListener(eventName, callback, false);
        } else if (!!element.attachEvent) {
            element.attachEvent('on' + eventName, callback);
        } else {
            element['on' + eventName] = callback;
        }

        // Attaching callback event to the prototype for easy recall.
        element.eventStore[eventName] = callback;
    };

    return addListener;
});
