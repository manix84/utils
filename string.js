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
         * Truncating strings based on their length
         * @param {string} string - String truncated
         * @param {number} [maxWidth] - Maximum number of character before cut
         * @param {string} [brakeStr] - String added after break
         * @param {boolean} [cutWords] - String added after break
         * @returns {string}
         */
        truncate: function (string, maxWidth, brakeStr, cutWords) {
            var i = 0,
                totalWords = 0,
                brakeLen = 1,
                bits = [];

            brakeStr = brakeStr || '&hellip;';
            maxWidth = maxWidth || 75;
            cutWords = cutWords || false;

            if (!/^\&[a-z]+\;$/i.exec(brakeStr)) {
                brakeLen = brakeStr.length;
            }

            if (string.length > maxWidth) {
                if (cutWords) {
                    string = (string.substring(0, (maxWidth - brakeLen)) + brakeStr);
                } else {
                    bits = string.split('');

                    for(i = bits.length - 1; i > -1; --i) {
                        // Chop the string to the maximum limit length regardess of boundary
                        if (i > maxWidth - brakeLen) {
                            bits.length = i;
                        // If the current character matches the boundary character, chop here, and break out of the loop
                        } else if (' ' === bits[i]) {
                            bits.length = i;
                            break;
                        }
                    }
                    string = string.substr(0, bits.length) + brakeStr;
                }
            }
            return string;
        },

        /**
         * Counts the number of words inside string. If the optional format is not specified, then the return value will
         * be an integer representing the number of words found. In the event the format is specified, the return value
         * will be an array, content of which is dependent on the format. The possible value for the format and the
         * resultant outputs are listed below.
         * @param {string} string - The String
         * @param {number} [format] - Specify the return value of this function. The current supported values are:
         * <!-- Sorry, this the code below is for JSDocs v3 -->
         * <table class="props">
         *     <thead>
         *         <tr>
         *             <th>Value</th>
         *             <th>Description</th>
         *         </tr>
         *     </thead>
         *     <tbody>
         *         <tr>
         *             <td class="name"><code>0</code></td>
         *             <td class="description">Returns the number of words found (default)</td>
         *         </tr>
         *         <tr>
         *             <td class="name"><code>1</code></td>
         *             <td class="description">Returns an array containing all the words found inside the string</td>
         *         </tr>
         *     </tbody>
         * </table>
         * @returns {number|array}
         */
        wordCount: function (string, format) {
            switch (format) {
            case 1: case 2:
                return string.split(' ');
            default: // case 0:
                return string.split(' ').length;
            }
        },

        /**
         * Capitalise the first letter of the string.
         * @param {string} string - String to be capitalised
         * @returns {string}
         */
        upperCaseFirst: function (string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },

        /**
         * Capitalise the first letter each word.
         * @param {string} string - String to be capitalised
         * @returns {string}
         */
        upperCaseWords: function (string) {
            return (string + String()).replace(/^([a-z])|\s+([a-z])/g, function ($1) {
                return $1.toUpperCase();
            });
        },

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
