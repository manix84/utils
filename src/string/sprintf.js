/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/string/sprintf', function () {

    /**
     * Return a formatted string (Replicating sprintf behaviour from PHP)
     * @param {string} string - String with xml tags
     * @param {array} values - Array of values to be converted in the string
     * @returns {string}
     * @todo Add support for escaping characters (EG: "some /%d text" shouldn't be replace)
     */
    var sprintf = function (string, values) {
        var i = 0;
        for (; i < values.length; i++) {
            switch (utilsBase.getType(values[i])) {
            case 'number':
                if (String(values[i]).indexOf(".") < 0) {
                    string = string.replace(/%d/, values[i]);
                } else {
                    string = string.replace(/%f/, values[i]);
                }
                break;
            case 'string':
                string = string.replace(/%s/, values[i]);
                break;
            }
        }
        return string;
    };

    return sprintf;
});
