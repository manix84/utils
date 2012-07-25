/**
 * Cookie utilities
 * @author Rob Taylor [manix84@gmail.com]
 */
define('cookie', function () {

    /**
     * @exports cookie
     */
    var cookie = {
        /**
         * Cookie name
         * @private
         * @type {string}
         */
        _name: location.hostname.replace(/\./g, '_'),

        /**
         * Cookie expiry time in days
         * @private
         * @type {number}
         */
        _expires: 90,

        /**
         * Domain cookie should be saved too.
         * @private
         * @type {string}
         */
        _domain: (location.hostname === 'localhost' ? false : location.hostname),

        /**
         * Cookies path, realive to it's domain
         * @private
         * @type {string}
         */
        _path: '/',

        /**
         * Is the cookie secure.
         * @private
         * @type {boolean}
         * @default false
         */
        _secure: false,

        /**
         * Get the cookie and turn it into an object.
         * @private
         * @example this._getCookieObject();
         * @return {object} E.G: {"boolean": true, "string": "a string", "number": 1}
         */
        _getCookieObject: function () {
            var i = 0,
                cookies = document.cookie.split(';'),
                cookieString;

            for (; i < cookies.length; i++) {
                if (this._name === cookies[i].substr(0, cookies[i].indexOf('=')).replace(/^\s+|\s+$/g, '')) {
                    cookieString = window.unescape(cookies[i].substr(cookies[i].indexOf('=') + 1));

                    return JSON.parse(cookieString);
                }
            }
            return {};
        },

        /**
         * Set the cookie from an object converted to a string.
         * @private
         * @example this._setCookieObject({
         *      "boolean": true,
         *      "string": "a string",
         *      "number": 1
         * });
         * @param {object} cookieObject - An object of keys and values to be converted to a string and added to the
         *     cookie.  Note: Object can't contain an object yet.
         * @return {boolean} true on success, false on failure
         */
        _setCookieObject: function (cookieObject) {
            var time = new Date();

            time.setTime(time.getTime() + (1000 * 60 * 60 * 24 * this._expires));

            document.cookie = [
                encodeURIComponent(this._name) + '=' + window.escape(JSON.stringify(cookieObject)),
                this._expires ? 'expires=' + time.toUTCString() : '',
                this._path ? 'path=' + this._path : '',
                this._domain ? 'domain=' + this._domain : '',
                this._secure ? 'secure' : ''
            ].join('; ');

            return (JSON.stringify(cookieObject) === JSON.stringify(this._getCookieObject()));
        },

        /**
         * Set a key and value into the cookie.
         * @param {string} key
         * @param {mixed} value - item to be set at the value. Note: Object type not currently supported.
         * @example cookie.set('keyName', 'value');
         * @return {boolean} true on success, false on failure
         */
        set: function (key, value) {
            if (typeof key === 'undefined' || typeof value === 'undefined') {
                warn('Key and value must be set');
                return;
            }

            var cookieObject = this._getCookieObject();
            cookieObject[key] = value;

            this._setCookieObject(cookieObject);

            cookieObject = this._getCookieObject();

            return (cookieObject[key] === value);
        },

        /**
         * Get a value, based on a key from the cookie.
         * @param {string} key
         * @example cookie.get('keyName');
         * @return {mixed}
         */
        get: function (key) {
            var cookieObject = this._getCookieObject();

            return cookieObject[key];
        },

        /**
         * Remove a value, based on a key from the cookie.
         * @param {string} key
         * @example cookie.remove('keyName');
         * @return {boolean} true on success, false on failure.
         */
        remove: function (key) {
            var cookieObject = this._getCookieObject();
            delete cookieObject[key];

            this._setCookieObject(cookieObject);

            cookieObject = this._getCookieObject();

            return (typeof cookieObject[key] === 'undefined');
        },

        /**
         * Get all keys and values from the cookie.
         * @example cookie.getAll();
         * @return {object} E.G: {"boolean": true, "string": "a string", "number": 1}
         */
        getAll: function () {
            return this._getCookieObject();
        },

        /**
         * Erase all keys and values from the cookie.
         * @example cookie.clearAll();
         * @return {boolean} true on success, false on failure.
         */
        clearAll: function () {
            this._setCookieObject({});

            return (JSON.stringify(this._getCookieObject()) === "{}");
        }
    };

    return cookie;
});
