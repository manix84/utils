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
         * Takes a string and parses it for all inline script tags. It returns an array of all the
         * scripts found and removes them from the string. If no scripts are found, it returns an empty array.
         * @params {string} string - The string that is supposed to be parsed
         * @returns {Array} Array of scripts to be evaled. If no scripts are found, it returns
         *          an empty array.
         */
        getScripts: function (string) {
            // regular expression that searches for script tags and gets the content
            // this regular expression is only supposed to match script tags that contain inline scripts
            //var rscript = /<script[^>]*>(?!\s*<\/script>)([\s\S]*?)<\/script>/i,
            // NB: FOR WHATEVER REASON, THE REGULAR EXPRESSION ABOVE WORKS, WHEREAS IF WE CONSTRUCT
            // IT LIKE THIS, IT DOESN'T... ELSE WE COULD USE THE PROPERTY AS IS USED IN THE REMOVEINLINESCRIPT
            // TO CONSTRUCT OUR REGEX
            var rscript = new RegExp(this._rscript, 'i'),
                scripts = [],
                results;

            do {
                results = rscript.exec(string);
                // save the script
                if (results) {
                    if (results[1]) {
                        scripts.push(results[1]);
                    }
                }
                string = string.replace(rscript, '');
            } while (results);

            return scripts;
        },

        /**
         * Remove all inline scripts from a html string.
         * @params {string} string - A string of html which may or may not contain a script tag.
         * @returns {string} returns the html without any script tags.
         */
        removeInlineScripts: function (string) {
            // regular expression that searches for script tags and gets the content
            // this regular expression is only supposed to match script tags that contain inline scripts
            var rscript = new RegExp(this._rscript, 'gi');
            string = string.replace(rscript, '');

            return string;
        },

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
        }
    };

    return utils;
});