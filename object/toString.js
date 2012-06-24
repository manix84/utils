/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/object/toString', function () {

    /**
     * Turns an object into a string
     * @param {object} object - Object to be converted to a string
     * @example object.toString({key1: 'var', key2: 'var'}); // RETURNS: "{key1: 'var', key2: 'var'}"
     * @returns {string} E.G: "{key1: 'var', key2: 'var'}"
     */
    var toString = function (object) {
        if (typeof JSON === 'object' && typeof JSON.stringify !== 'undefined') {
            return JSON.stringify(object);
        } else {
            var parse = function (input) {
                var output = [],
                    value,
                    key;

                for (key in input) {
                    if (input.hasOwnProperty(key)) {
                        value = input[key];
                        switch (typeof value) {
                        case 'object':
                            output[output.length] = ("\"" + key + "\":{ " + parse(value).join(", ") + "}");
                            break;
                        case 'string':
                            output[output.length] = ["\"" + key + "\":\"" + value.toString() + "\""];
                            break;
                        default:
                            output[output.length] = ["\"" + key + "\":" + value.toString()];
                        }
                    }
                }
                return output;
            };
            return "{" + parse(object).join(", ") + "}";
        }
    };
    return toString;
});
