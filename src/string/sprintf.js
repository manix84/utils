/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('string/sprintf', function () {

    /**
     * Return a formatted string (Replicating sprintf behaviour from PHP)
     * @exports string/sprintf
     *
     * @param {String} string - String with xml tags
     * @param {Array} values - Array of values to be converted in the string
     * @returns {String}
     */
    var sprintf = function (string, values) {
        var i = 0;
        for (; i < values.length; i++) {
            switch (Object.prototype.toString.call(values[i])) {
            case '[object Number]':
                if (String(values[i]).indexOf(".") < 0) {
                    string = string.replace(/([^\\])%d/, "$1" + values[i]);
                } else {
                    string = string.replace(/([^\\])%f/, "$1" + values[i]);
                }
                break;
            case '[object String]':
                string = string.replace(/([^\\])%s/, "$1" + values[i]);
                break;
            }
        }
        return string;
    };

    return sprintf;
});
