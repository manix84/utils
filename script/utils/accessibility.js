/**
 * Accessibility utility, providing accessibility functions to users.
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/accessibility', [
    'jquery'
], function ($) {
    /**
     * @exports utils/accessibility
     * @requires jquery
     */
    var accessibility = {
        /**
         * Adding an Aria alert message to the page, and removing it after 1 second
         * @param {string} message - Message to be entered into the Aria alert.
         * @param {dom object} element - Dom element to attach the Aria alert message to.
         * @param {number} [time] - How long the message should be attached to the page before deletion (in seconds)
         * @return {boolean}
         */
        alert: function (message, element, time) {
            time = time || 1;
            if (typeof message !== 'string') {
                return false;
            }

            element = (typeof element === 'string') ? element : 'body';

            var formattedMessage = $("<h3 role='alert'>" + message + "</h3>").css({
                "position": "absolute",
                "left": "-2500px",
                "width": "1px",
                "overflow": "hidden"
            });

            $(element).append(formattedMessage);

            window.setTimeout(function () {
                formattedMessage.detach();
            }, time * 1000);
        }
    };

    return accessibility;
});