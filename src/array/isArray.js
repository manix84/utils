/**
 * Useful utilities for arrays.
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/array/isArray', function () {
    /**
     * Finds and reports the object type, rather than just
     * @exports utils/array/isArray
     * @params {Mixed} item - Anything.
     * @returns {Boolean} - Is Array?
     */
    var isArray = function (arrayObj) {
        return (Object.prototype.toString.call(arrayObj) === '[object Array]');
    };

    return isArray;
});
