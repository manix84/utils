/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/object/isObject', function () {
    /**
     * Checks whether argument passed is an object
     * @param {mixed} object - Item to be tested
     * @example object.isObject({key1: 'var', key2: 'var'}); // RETURNS: true
     * @example object.isObject(['key1', 'key2']); // RETURNS: false
     * @returns {boolean}
     */
    var isObject = function (objectObj) {
        return (Object.prototype.toString.call(objectObj) === '[object Object]');
    };

    return isObject;
});
