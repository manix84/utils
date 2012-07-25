/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('array/match', function () {

    /**
     * Are the arrays matching
     * @exports array/match
     * @param {array} arrayA The first array to check against the second
     * @param {array} arrayB The second array to check against the first
     * @returns {boolean}
     */
    var match = function (arrayObjA, arrayObjB) {
        var i = 0,
            isArray = (Object.prototype.toString.call(arrayObjA) === '[object Array]');

        if (Object.prototype.toString.call(arrayObjA) !== '[object Array]' ||
            Object.prototype.toString.call(arrayObjB) !== '[object Array]') {
            throw new Error('First and second arguments must be a arrays.');
        }

        for (; i < arrayObjA.length; i++) {
            if ((isArray && !match(arrayObjA[i], arrayObjB[i])) ||
                    (isArray && arrayObjA[i] !== arrayObjB[i])) {
                return false;
            }
        }
        return true;
    };

    return match;
});
