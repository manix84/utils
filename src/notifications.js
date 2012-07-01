/**
 * Notify the user via WebKit's Notification systems. This can and should be extended as other browsers
 * impliment the system, and as the standards are fine tuned.
 * @see http://www.w3.org/TR/notifications/
 * @author Rob Taylor [manix84@gmail.com]
 */

define('utils/notifications', function () {

    /**
     * @exports utils/notifications
     */
    var notifications = {

        /**
         * @private
         * @type {boolean}
         */
        _wantsNotifications: true,

        /**
         * Request permission from the user to access the notification api.
         * @return {boolean} Permission has been granted.
         */
        requestPermission: function () {
            if (window.webkitNotifications && this._wantsNotifications) {
                window.webkitNotifications.requestPermission(this.checkPermission);
                return true;
            }
            return false;
        },

        /**
         * Set wants notification boolean.
         * @param {boolean} value Wether the user wants notifications or not.
         */
        setWantsNotifications: function (value) {
            this._wantsNotifications = (value ? true : false);
            return this._wantsNotifications;
        },

        /**
         * Check with the browser wether permission has already been granted to access the notification api.
         * @return {boolean}
         */
        checkPermission: function () {
            return (!!window.webkitNotifications && (window.webkitNotifications.checkPermission() === 0));
        },

        /**
         * Send a message to the user through the notification api.
         * @param  {[type]} title [description]
         * @param  {[type]} body [description]
         * @param  {[type]} user_choices [description]
         * @return {[type]}  [description]
         */
        sendMessage: function (title, body, user_options) {
            user_options = user_options || {};
            var options = {
                    iconUrl: '../img/logo.png',
                    html: false,
                    timeout: 8
                },
                property, message;

            for (property in user_options) {
                if (user_options.hasOwnProperty(property) && options.hasOwnProperty(property)) {
                    options[property] = user_options[property];
                }
            }

            if (window.webkitNotifications && this.checkPermission()) {
                message = window.webkitNotifications.createNotification(options.iconUrl, title, body);
                message.show();

                window.setTimeout(function () {
                    message.cancel();
                }, options.timeout * 1000);

                return true;
            }
            this.requestPermission();
            return false;
        }

    };

    return notifications;
});
