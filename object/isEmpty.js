/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/object/isEmpty', function () {

    /**
     * Checks whether the passed object is empty
     * @param {object} object - object to be checked
     * @example object.isEmpty({key1: 'var', key2: 'var'}); // RETURNS: false
     * @example object.isEmpty({); // RETURNS: true
     * @returns {boolean}
     */
    var isEmpty = function (object) {
        var prop;
        for (prop in object) {
            if (object.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };

    return isEmpty;
});
