/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/events/trigger', function () {

    /**
     * Trigger an event listener to a DOM Element.
     * @param {HTMLElement} element - The object to attach the event listener to.
     * @param {String} eventName - The event name.
     * @param {Object} objectData - The function to be called when the event fires. NOTE: I'm still working on this.
     */
    var trigger = function (element, eventName, objectData) {
        var event;
        if (!!document.createEvent) {
            event = document.createEvent('HTMLEvents');
            event.initEvent(eventName, true, true);
        } else if (!!document.createEventObject) {
            event = document.createEventObject();
            event.eventType = eventName;
        }

        event.eventName = eventName;
        if (!!element.dispatchEvent) {
            return element.dispatchEvent(event);
        } else if (!!element.fireEvent) {
            return element.fireEvent('on' + event.eventType, event);
        } else if (!!element[eventName]) {
            return element[eventName](objectData);
        } else if (!!element['on' + eventName]) {
            return element['on' + eventName](objectData);
        }
    };

    return trigger;

});
