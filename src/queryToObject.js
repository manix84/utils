/**
 * @author Rob Taylor [manix84@gmail.com]
 */

define('queryToObject', function () {

    /**
     * Takes the Query/Search String, and parses it into an object.
     * @exports queryToObject
     *
     * @return {Object} An object, containing all query keys and values.
     */
    var queryToObject = function () {
        var query = [],
            outputObj = {},
            i = 0,
            queries;

        if (window.location.search) {
            queries = window.location.search.substring(1).split('&');
            for (; i < queries.length; i++) {
                query = queries[i].split('=');
                outputObj[query[0]] = query[1] || '';
            }
        }
        return outputObj;
    };

    return queryToObject;
});
