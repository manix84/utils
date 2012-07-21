/**
 * Useful utilities for arrays.
 * @author Rob Taylor [manix84@gmail.com]
 */
define('array/isArray', function () {
    /**
     * Finds and reports the object type, rather than just
     * @exports array/isArray
     * @params {Mixed} item - Anything.
     * @returns {Boolean} - Is Array?
     */
    var isArray = function (arrayObj) {
        return (Object.prototype.toString.call(arrayObj) === '[object Array]');
    };

    return isArray;
});
