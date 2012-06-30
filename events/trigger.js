/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/events/trigger', function () {

    var trigger = function trigger(element, eventName, object) {
        var event;
        if (!!document.createEvent) {
            event = document.createEvent('HTMLEvents');
            event.initEvent(eventName, true, true);
        } else if (!!document.createEventObject) {// IE < 9
            event = document.createEventObject();
            event.eventType = eventName;
        }

        event.eventName = eventName;
        if (!!element.dispatchEvent) {
            element.dispatchEvent(event);
        } else if (!!element.fireEvent) {
            element.fireEvent('on' + event.eventType, event);
        } else if (!!element[eventName]) {
            element[eventName]();
        } else if (!!element['on' + eventName]) {
            element['on' + eventName]();
        }
    };

    return trigger;

});
