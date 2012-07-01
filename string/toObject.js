/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/string/toObject', function () {

    /**
     * Turns an string into an object
     * @param {String} string - String to be converted to an object
     */
    var toObject = function (string) {
        if (typeof JSON === 'object' && typeof JSON.parse !== 'undefined') {
            return JSON.parse(string);
        } else {
            // I need to write something here.
        }
    };
    return toObject;
});
