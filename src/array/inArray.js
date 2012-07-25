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
        var i = 0;

        if (Object.prototype.toString.call(arrayObj) !== '[objecy Array]') {
            throw new Error('Second argument must be an array.');
        }
        for (; i < arrayObj.length; i++) {
            if (
                (Object.prototype.toString.call(arrayObj[i]) === '[object Array]' && inArray(value, arrayObj[i])) ||
                (Object.prototype.toString.call(arrayObj[i]) !== '[object Array]' && arrayObj[i] === value)
            ) {
                return true;
            }
        }

        return false;
    };

    return inArray;
});
