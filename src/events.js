/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('events', function () {

    var elementRegistry = {},
        events = {
        /**
         * Adds an event listener to a DOM Element.
         * @exports events.add
         *
         * @param {HTMLElement} element - The object to attach the event listener to.
         * @param {String} name - The event name.
         * @param {Function} callback - The function to be called when the event fires.
         */
        add: function (element, eventName, callback) {
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
        },


        /**
         * Removes an event listener from a DOM Element.
         * @exports events.remove
         *
         * @param {HTMLElement} element - The element the event is attached too.
         * @param {String} name - The name of the event you wish to remove.
         * @param {Function} [callback] - Function you with to remove from the event.
         *      If event.addListener is used to attach the listener, this param is not necessary.
         */
        remove: function (element, eventName, callback) {
            callback = callback || (!!element.eventStore ? element.eventStore[eventName] : false);
            if (!!callback) {
                if (element.removeEventListener) {
                    element.removeEventListener(eventName, callback, false);
                } else if (element.detachEvent) {
                    element.detachEvent('on' + eventName, callback);
                }
                element['on' + eventName] = null;
                element.eventStore[eventName] = null;
            } else {
                // console.warn('"' + eventName + '" not attached to specified element.', element);
            }
        },

        /**
         * Trigger an event listener to a DOM Element.
         * @exports events.trigger
         *
         * @param {HTMLElement} element - The object to attach the event listener to.
         * @param {String} eventName - The event name.
         * @param {Object} objectData - The function to be called when the event fires. NOTE: I'm still working on this.
         */
        trigger: function (element, eventName, objectData) {
            var event,
                prop;

            if (!!document.createEvent) {
                event = document.createEvent('HTMLEvents');
                event.initEvent(eventName, true, true);
            } else if (!!document.createEventObject) {
                event = document.createEventObject();
                event.eventType = eventName;
            }

            event.eventName = eventName;
            for (prop in objectData) {
                if (objectData.hasOwnProperty(prop)) {
                    event[prop] = objectData[prop];
                }
            }

            if (!!element.dispatchEvent) {
                return element.dispatchEvent(event);
            } else if (!!element.fireEvent) {
                return element.fireEvent('on' + event.eventType, event);
            } else if (!!element[eventName]) {
                return element[eventName](objectData);
            } else if (!!element['on' + eventName]) {
                return element['on' + eventName](objectData);
            }
        }
    };

    return events;
});
