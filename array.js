/**
 * Useful utilities for arrays.
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/array', [
    'utils/array/inArray',
    'utils/array/indexOf',
    'utils/array/isArray',
    'utils/array/lowerCase',
    'utils/array/match',
    'utils/array/rand',
    'utils/array/toObject',
    'utils/array/upperCase'
], function (inArray, indexOf, isArray, lowerCase, match, rand, toObject, upperCase) {
    /**
     * @exports utils/array
     * @requires jquery
     * @requires utils/core
     */
    var array = {
        inArray: inArray,
        indexOf: indexOf,
        isArray: isArray,
        lowerCase: lowerCase,
        match: match,
        rand: rand,
        toObject: toObject,
        upperCase: upperCase
    };

    return array;
});
