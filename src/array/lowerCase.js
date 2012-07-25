/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('array/lowerCase', function () {
    /**
     * Change all array string values to lower case.
     * @exports array/lowerCase
     * @param {array} The array to be lower case
     * @returns {array}
     */
    var lowerCase = function (arrayObj) {
        var i = 0;

        if (Object.prototype.toString.call(arrayObj) !== '[object Array]') {
            throw new Error('First argument must be an array.');
        }

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
