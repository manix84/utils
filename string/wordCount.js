/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/string/wordCount', function () {

    /**
     * Counts the number of words inside string. If the optional format is not specified, then the return value will
     * be an integer representing the number of words found. In the event the format is specified, the return value
     * will be an array, content of which is dependent on the format. The possible value for the format and the
     * resultant outputs are listed below.
     * @param {string} string - The String
     * @param {number} [format] - Specify the return value of this function. The current supported values are:
     * <!-- Sorry, this the code below is for JSDocs v3 -->
     * <table class="props">
     *     <thead>
     *         <tr>
     *             <th>Value</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class="name"><code>0</code></td>
     *             <td class="description">Returns the number of words found (default)</td>
     *         </tr>
     *         <tr>
     *             <td class="name"><code>1</code></td>
     *             <td class="description">Returns an array containing all the words found inside the string</td>
     *         </tr>
     *     </tbody>
     * </table>
     * @returns {number|array}
     */
    var wordCount = function (string, format) {
        var stringArray = string.split(' ');
        switch (format) {
        case 1: case 2:
            return stringArray;
        default: // case 0:
            return stringArray.length;
        }
    };
});
