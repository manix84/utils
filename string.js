/**
 * String utilities
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/string', [
    'jquery',
    'utils/core'
], function ($, utilsBase) {

    /**
     * @exports utils/string
     * @requires jquery
     * @requires utils/core
     */
    var string = {

        /**
         * Trim whitespace from the beginning and end of a string, for when trim() is unavailable
         * @param {string} string - String with excessive whitespace
         * @returns {string}
         */
        trim: function (string) {
            if (typeof String.prototype.trim !== 'function') {
                return string.replace(/\s+[.\^\s]+\s+/g, '');
            }
            return string.trim();
        },

        /**
         * Remove HTML tags from string
         * @param {string} string - String with xml tags
         * @param  {string} tag - Tag to replace, optional
         * @returns {string}
         */
        stripTags: function (string, tag) {
            if (tag) {
                var regex = new RegExp('<' + tag + '>([.\\s\\S])*?</' + tag + '>', 'g');
                return string.replace(regex, '');
            }
            return string.replace(/<[^>]+>/ig, '');
        },

        /**
         * Return a formatted string (Replicating sprintf behaviour from PHP)
         * @param {string} string - String with xml tags
         * @param {array} values - Array of values to be converted in the string
         * @returns {string}
         * @todo Add support for escaping characters (EG: "some /%d text" shouldn't be replace)
         */
        sprintf: function (string, values) {
            var i = 0;
            for (; i < values.length; i++) {
                switch (utilsBase.getType(values[i])) {
                case 'number':
                    if (String(values[i]).indexOf(".") < 0) {
                        string = string.replace(/%d/, values[i]);
                    } else {
                        string = string.replace(/%f/, values[i]);
                    }
                    break;
                case 'string':
                    string = string.replace(/%s/, values[i]);
                    break;
                }
            }
            return string;
        }
    };

    return string;
});
