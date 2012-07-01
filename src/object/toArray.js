/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('object/toArray', function () {
    /**
     * Converts an object to an array, disgarding of the keys.
     * @exports object/toArray
     *
     * @param {Object} objectObj - Object to be converted to an array.
     * @returns {Array} The newly created array
     */
    var toArray = function (objectObj) {
        var i = 0,
            outputArray = [],
            property;

        for (property in objectObj) {
            if (objectObj.hasOwnProperty(property)) {
                outputArray[outputArray.length] = objectObj[property];
            }
        }

        return outputArray;
    };

    return toArray;
});
