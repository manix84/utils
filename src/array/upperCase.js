/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/array/upperCase', function () {
    /**
     * Change all array string values to uppercase.
     * @exports utils/array/upperCase
     * @param {array} The array to be uppercased
     * @returns {array}
     */
    var upperCase = function (arrayObj) {
        var i = 0;

        for (; i < arrayObj.length; i++) {
            switch (Object.prototype.toString.call(arrayObj[i])) {
            case '[object Array]':
                arrayObj[i] = upperCase(arrayObj[i]);
                break;
            case '[object String]':
                arrayObj[i] = arrayObj[i].toUpperCase();
                break;
            }
        }

        return arrayObj;
    };

    return upperCase;
});
