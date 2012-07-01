/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('object/keys', function () {

    /**
     * Gather an array of object keys.
     * @exports object/keys
     *
     * @param {object} object - Object to be converted
     * @example object.keys({key1: 'var', key2: 'var'}); // RETURNS: ['key1' 'key2']
     * @returns {array} (EG: ['key', 'key', 'key']
     */
    var keys = function (object) {
        var key,
            output = [];

        for (key in object) {
            if (object.hasOwnProperty(key) && key !== 'prototype') {
                output.push(key);
            }
        }
        return output;
    };

    return keys;
});
