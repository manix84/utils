/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/string/isString', function () {
    /**
     * Checks whether argument passed is a string
     * @param {Mixed} object - Item to be tested
     * @example isString("a string"); // RETURNS: true
     * @example isString(String("a string")); // RETURNS: true
     * @example isString(['key1', 'key2']); // RETURNS: false
     * @returns {Boolean}
     */
    var isString = function (stringObj) {
        return (Object.prototype.toString.call(stringObj) === '[object String]');
    };

    return isString;
});
