/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('getType', function () {

    /**
     * Finds and reports the object type, rather than just
     *   - This is based on code by Douglas Crockford.
     * @exports getType
     *
     * @params {Mixed} mixedObj - Anything.
     * @returns {String} Name of the object type.
     * @example getType(new Date());      // RESULT: "date"
     * @example getType(new String());    // RESULT: "string"
     * @example getType(true);            // RESULT: "boolean"
     */
    var getType = function (mixedObj) {
        // Get object type
        return Object.prototype.toString
            .call(mixedObj) // turn called object to a string
            .match(/^\[object\s(.*)\]$/)[1] // Loose the "[object " and "]" from and only pass the object type.
            .toLowerCase(); // Lowercase the name, because it comes out as "Date" or "String"
    };
    return getType;
});
