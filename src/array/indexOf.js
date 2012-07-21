/**
 * Useful utilities for arrays.
 * @author Rob Taylor [manix84@gmail.com]
 */
define('array/isArray', function () {
    /**
     * Returns the index of the value in the array passed. If the value can't be found, the return value is -1
     * @exports array/indexOf
     * @param {mixed} value the value that is supposed to be checked
     * @param {array} array the array to be checked
     * @returns {number}
     */
    var indexOf = function (value, arrayObj) {
        var i = 0;

        // if indexOf is supported we will use the native functionality
        if (arrayObj.indexOf) {
            return arrayObj.indexOf(value);
        }

        for (; i < arrayObj.length; i++) {
            if (arrayObj[i] == value) {
                return i;
            }
        }

        return -1;
    };

    return indexOf;
});
