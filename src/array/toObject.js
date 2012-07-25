/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('array/toObject', function () {
    /**
     * Converts an array to an object with the array values as keys and empty strings as the value. Note that
     * objects can't have duplicate keys, hence there is a chance that duplicates will be missing from the
     * object. This function works best with array values of strings and is handy for 'for ... in ...' loops
     * or if .... in .... style checking
     * @exports array/toObject
     * @example // Array
     * toObject(['hello', 'world']) // RESULT {'hello': '', 'world': ''}
     * @param {array} array - A the array to be converted
     * @returns {object} The newly created object
     */
    var toObject = function (arrayObj) {
        var i = 0,
            outputObj = {};

        if (Object.prototype.toString.call(arrayObj) !== '[object Array]') {
            throw new Error('First argument must be an array.');
        }

        for (; i < arrayObj.length; i++) {
            outputObj[arrayObj[i]] = '';
        }

        return outputObj;
    };

    return toObject;
});
