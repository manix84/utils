/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/array/lowerCase', function () {
    /**
     * Change all array string values to lower case.
     * @exports utils/array/lowerCase
     * @param {array} The array to be lower case
     * @returns {array}
     */
    var lowerCase = function (arrayObj) {
        var i = 0;

        for (; i < arrayObj.length; i++) {
            switch (Object.prototype.toString.call(arrayObj[i])) {
            case '[object Array]':
                arrayObj[i] = lowerCase(arrayObj[i]);
                break;
            case '[object String]':
                arrayObj[i] = arrayObj[i].toLowerCase();
                break;
            }
        }

        return arrayObj;
    };

    return lowerCase;
});
