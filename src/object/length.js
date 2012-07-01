/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/object/length', function () {

    /**
     * Checks the length of the passed object
     * @param {object} object - Object to be checked
     * @example object.length({key1: 'var', key2: 'var'}); // RETURNS: 2
     * @returns {number}
     * @todo  Add depth.
     */
    var length = function (object) {
        var prop,
            size = 0;
        for (prop in object) {
            if (object.hasOwnProperty(prop)) {
                size++;
            }
        }
        return size;
    };

    return length;
});
