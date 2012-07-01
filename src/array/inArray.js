/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('array/inArray', function () {
    /**
     * Checks if a value exists in an array
     * @exports array/inArray
     * @param {mixed} value The searched value
     * @param {array} The array to be searched
     * @returns {boolean}
     */
    var inArray = function (value, arrayObj) {
        var i = 0,
            isArray = (Object.prototype.toString.call(arrayObj) === '[objecy Array]');

        for (; i < arrayObj.length; i++) {
            if ((isArray && inArray(value, arrayObj[i])) ||
                    (!isArray && arrayObj[i] === value)) {
                return true;
            }
        }

        return false;
    };

    return inArray;
});
