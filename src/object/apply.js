/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('object/apply', function () {
    /**
     * Copies properties from one object to another. All properties from 'source' will be copied onto 'destination',
     * potentially overwriting existing properties on 'destination'. Properties from 'source's prototype chain will not
     * be copied.
     * @exports object/apply
     *
     * @param {Object} destination - Destination object. If this object is undefined or falsey, a new object will be
     *     created.
     * @param {Object} source - Properties of this object will be copied onto the destination. If this object is
     *     undefined or falsey, a new object will be created.
     * @returns {Object}
     */
    var apply = function (source, destination) {
        var property;
        for (property in source) {
            if (source.hasOwnProperty(property)) {
                destination[property] = source[property];
            }
        }
        return destination;
    };

    return apply;
});
