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
         * Regular expression that searches for script tags and gets the content.
         * This regular expression is only supposed to match script tags that contain inline scripts.
         * The regular expression is defined as a string since we need different flags for different use cases.
         * @private
         * @type {string}
         */
        _rscript: '<script[^>]*>(?!\\s*<\\/script>)([\\s\\S]*?)<\\/script>',

        /**
         * Evals an array of scripts. This is a companion function to be used with the getScripts function.
         * @params {array} scripts - An array of script strings to be evaled
         * @returns {array} An array of return values from the individual scripts
         */
        evalScripts: function (scripts) {
            var returns = [],
                i = 0;
            for (; i < scripts.length; i++) {
                returns.push(eval(scripts[i]));
            }

            return returns;
        },

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
