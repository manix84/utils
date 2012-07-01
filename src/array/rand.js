/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('array/rand', function () {
    /**
     * Pick one or more random entries out of an array (multiple values not implimented yet)
     * @exports array/rand
     * @param {array} array the array to have items randomly retreieved from
     * //@param {mixed} reqNum the number of array items wanted back
     * @returns {mixed}
     * @todo Add functionality for the second parameter.
     */
    var rand = function (arrayObj, reqNum) {
        var index = Math.floor(Math.random() * arrayObj.length);

        return arrayObj[index];
    };

    return rand;
});
