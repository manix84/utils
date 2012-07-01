/**
 * Accessibility utility, providing accessibility functions to users.
 * @author Rob Taylor [manix84@gmail.com]
 */
define('accessibility/alert', function () {
    /**
     * Adding an Aria alert message to the page, and removing it after 1 second
     * @exports accessibility/alert
     *
     * @param {String} message - Message to be entered into the Aria alert.
     * @param {String} [attachToId] - Dom ID to attach the Aria alert message to. If not specified, body is used.
     * @param {Number} [time] - How long the message should be attached to the page before deletion (in seconds)
     * @return {Boolean}
     */
    var alert = function (message, attachToId, time) {
        time = time || 1;
        if (typeof message !== 'string') {
            return false;
        }

        var attachTo = (typeof attachToId === 'string') ? document.getElementById(attachToId) : document.documentElement,
            alertElement = document.createElement('h3');

        alertElement.innerText = message;
        alertElement.setAttribute('role', 'alert');
        alertElement.setAttribute('style', "position: absolute; left: -2500px; width: 1px; overflow: hidden");

        attachTo.appendChild(alertElement);

        window.setTimeout(function () {
            attachTo.removeChild(alertElement);
        }, time * 1000);
    };

    return alert;
});