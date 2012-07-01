/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/object/toArray', function () {
    /**
     * Converts an object to an array, disgarding of the keys.
     * @exports utils/object/toArray
     * @param {Object} objectObj -
     * @returns {Array} The newly created array
     */
    var toArray = function (objectObj) {
        var i = 0,
            outputArray = [],
            property;

        for (property in objectObj) {
            outputArray[outputArray.length] = objectObj[property];
        }

        return outputArray;
    };

    return toArray;
});
