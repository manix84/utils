/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('object/compare', function () {
    /**
     * Compare two objects to each-other.
     * @exports object/compare
     *
     * @param {Object} objectA - first object to be compared to second
     * @param {Object} objectB - second object to be compared to first
     * @example compare({key1: 'var', key2: 'var'}, {key1: 'var', key2: 'var'}); // RETURNS: true
     * @example compare({key1: 'var', key2: 'var'}, {key1: 'var'}); // RETURNS: false
     * @returns {Boolean}
     */
    var compare = function (objectA, objectB) {
        var key;

        if (Object.prototype.toString.call(objectA) !== '[object Object]' ||
            Object.prototype.toString.call(objectB) !== '[object Object]') {
            return false;
        } else {
            if (typeof JSON === 'object' && typeof JSON.stringify !== 'undefined') {
                return (JSON.stringify(objectA) === JSON.stringify(objectB));
            } else {
                for (key in objectA) {
                    if (objectA.hasOwnProperty(key)) {
                        if (typeof objectA[key] !== typeof objectB[key]) {
                            return false;
                        }
                        if ((objectA[key] === null) !== (objectB[key] === null)) {
                            return false;
                        }
                        switch (typeof objectA[key]) {
                        case 'undefined':
                            if (typeof objectB[key] !== 'undefined') {
                                return false;
                            }
                            break;
                        case 'object':
                            if (objectA[key] !== null && objectB[key] !== null &&
                                    (objectA[key].constructor.toString() !== objectB[key].constructor.toString() ||
                                    !compare(objectA[key], objectB[key]))) {
                                return false;
                            }
                            break;
                        case 'function':
                            if (objectA[key].toString() !== objectB[key].toString()) {
                                return false;
                            }
                            break;
                        default:
                            if (objectA[key] !== objectB[key]) {
                                return false;
                            }
                        }
                    }
                }
                return true;
            }
        }
    };

    return compare;
});
