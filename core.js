/**
 * Core utility functions
 * @author Rob Taylor [manix84@gmail.com]
 */

define('utils/core', function () {
    /**
     * @exports utils/core
     */
    var utils = {

        /**
         * Finds and reports the object type, rather than just
         *   - This is based heavily on the code by Douglas Crockford.
         * @params {mixed} item - Anything.
         * @returns {string} Name of the object type.
         * @example utils.getType(new Date());      // RESULT: "date"
         * @example utils.getType(new String());    // RESULT: "string"
         * @example utils.getType(true);            // RESULT: "boolean"
         */
        getType: function (item) {
            if (item === null) {
                return 'Null';
            }
            // Get object type
            return Object.prototype.toString
                .call(item)
                .match(/^\[object\s(.*)\]$/)[1]
                .toLowerCase();
        },

        /**
         * Adds an event listener to a DOM Element.
         * @param {dom object} attachTo - The object to attach the event listener to.
         * @param {string} name - The event name.
         * @param {function} callback - The function to be called when the event fires.
         */
        addListener: function (attachTo, eventName, callback) {
            if (typeof attachTo.addEventListener === 'function') {
                attachTo.addEventListener(eventName, callback, false);
            }
            if (typeof attachTo.attachEvent === 'object') {
                attachTo.attachEvent('on' + eventName, callback);
            }
            attachTo['on' + eventName] = callback;
        },

        /**
         * Takes the Query/Search String, and parses it into an object.
         * @return {Object} An object, containing all query keys and values.
         */
        readQueries: function () {
            var query = [],
                outputObj = {},
                i = 0,
                queries;

            if (window.location.search) {
                queries = window.location.search.substring(1).split('&');
                for (; i < queries.length; i++) {
                    query = queries[i].split('=');
                    outputObj[query[0]] = query[1] || '';
                }
            }
            return outputObj;
        }
    };

    return utils;
});
